;; ;; ;; Title: Tip-stacks Enhanced
;; ;; ;; Description: Decentralized tipping platform with advanced features

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;; Constants ;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(define-constant CONTRACT_OWNER 'STFPYA06K2F5BY0ESPY7HMK70WEAEXBFF20HGPYX)
(define-constant MAX_TIP_AMOUNT u1000000000)  ;; 1000 STX

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;  Error codes  ;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(define-constant ERR_INSUFFICIENT_FUNDS (err u1))
(define-constant ERR_INVALID_AMOUNT (err u2))
(define-constant ERR_TRANSFER_FAILED (err u3))

;; Added new error constants
(define-constant ERR_INVALID_USERNAME (err u8))
(define-constant ERR_INVALID_USERNAME_LENGTH (err u9))
(define-constant ERR_USERNAME_TAKEN (err u10))
(define-constant ERR_UNAUTHORIZED (err u6))
(define-constant ERR_INVALID_RECIPIENT (err u5))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;; Maps ;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(define-map user-tip-stats principal
  {
    total-tips-received: uint
  }
)

(define-map tip-history
  { sender: principal, recipient: principal, timestamp: uint }
  { amount: uint }
)

(define-map user-identity principal {
    username: (string-ascii 50),
    verified: bool
})

(define-map username-registry (string-ascii 50) bool)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;; Multi-Tip Data ;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Auto-incrementing batch ID  ensures each multi-tip batch has a unique log key
(define-data-var multi-tip-nonce uint u0)

;; Temporary state set before fold execution, read during fold, within a single transaction
(define-data-var temp-batch-id uint u0)

;; Separate history map for multi-tip batches  keyed by (batch-id, tip-index)
;; This avoids the same-block collision issue present in the single-tip tip-history map
(define-map multi-tip-history
    { batch-id: uint, tip-index: uint }
    {
        sender: principal,
        recipient: principal,
        amount: uint,
        timestamp: uint
    }
)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;; Helper Functions ;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(define-private (check-tip-amount (amount uint))
    (and 
      (>= (stx-get-balance tx-sender) amount)
      (< amount MAX_TIP_AMOUNT)
    )
)

(define-private (transfer-tip (recipient principal) (amount uint))
  (match (stx-transfer? amount tx-sender recipient)
    success (ok true)
    error ERR_TRANSFER_FAILED
  )
)








(define-private (update-recipient-stats (recipient principal) (amount uint))
  (map-set user-tip-stats recipient
    (merge
      (default-to
        { total-tips-received: u0 }
        (map-get? user-tip-stats recipient)
      )
      {
        total-tips-received: (+
          (get total-tips-received
            (default-to
              { total-tips-received: u0 }
              (map-get? user-tip-stats recipient)
            )
          )
          amount
        )
      }
    )
  )
)



(define-private (log-transaction (sender principal) (recipient principal) (amount uint))
  (map-set tip-history
    {
      sender: sender,
      recipient: recipient,
      timestamp: stacks-block-height
    }
    { amount: amount }
  )
)






(define-private (is-valid-recipient (recipient principal))
    (and 
        (not (is-eq recipient CONTRACT_OWNER)) 
        (not (is-eq recipient tx-sender))
    )
)





;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;; Multi-Tip Private Helpers ;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Fold helper  validates each tip entry and accumulates the total STX required.
;; Short-circuits on the first invalid entry, propagating the error forward.
;; Returns (ok total-amount) or (err error-code).
(define-private (validate-tip-entry
    (entry { recipient: principal, amount: uint })
    (acc (response uint uint))
)
    (match acc
        running-total
        (if (not (is-valid-recipient (get recipient entry)))
            (err u5)    ;; ERR_INVALID_RECIPIENT: recipient is self or contract owner
            (if (or (is-eq (get amount entry) u0) (>= (get amount entry) MAX_TIP_AMOUNT))
                (err u2)    ;; ERR_INVALID_AMOUNT: zero or exceeds MAX_TIP_AMOUNT
                (ok (+ running-total (get amount entry)))
            )
        )
        err-val (err err-val)   ;; propagate earlier error, skip remaining entries
    )
)

;; Fold helper executes a single tip transfer within a batch and updates all state.
;; Returns (ok next-tip-index) or (err error-code).
(define-private (execute-single-tip-entry
    (entry { recipient: principal, amount: uint })
    (acc (response uint uint))
)
    (match acc
        tip-index
        (let (
            (recipient (get recipient entry))
            (amount    (get amount entry))
        )
            (match (stx-transfer? amount tx-sender recipient)
                ok1
                (begin
                    (update-recipient-stats recipient amount)
                    (map-set multi-tip-history
                        { batch-id: (var-get temp-batch-id), tip-index: tip-index }
                        {
                            sender:    tx-sender,
                            recipient: recipient,
                            amount:    amount,
                            timestamp: stacks-block-height
                        }
                    )
                    (ok (+ tip-index u1))
                )
                err1 (err u3)
            )
        )
        err-val (err err-val)
    )
)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;; Public ;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Main Tip Function
(define-public (tip
    (recipient principal)
    (amount uint)
)
  (begin
      (asserts! (is-valid-recipient recipient) ERR_INVALID_RECIPIENT)
      (asserts! (check-tip-amount amount) ERR_INVALID_AMOUNT)

      (try! (transfer-tip recipient amount))

      (update-recipient-stats recipient amount)

      (log-transaction tx-sender recipient amount)

      (ok true)
  )
)




;; Multi-tip: send tips to up to 100 recipients in a single atomic call.
;;
;; All edge cases are validated BEFORE any STX moves:
;;   - list must not be empty
;;   - each recipient must not be tx-sender or CONTRACT_OWNER
;;   - each amount must be > 0 and < MAX_TIP_AMOUNT
;;   - sender must have enough balance to cover ALL tips combined
;;
;; Atomicity: if ANY single transfer fails, the ENTIRE transaction is reverted.
;; No partial success  either all tips land or none do.
;;
;; Returns (ok number-of-tips-sent) on success, (err error-code) on failure.
(define-public (multi-tip
    (tips (list 100 { recipient: principal, amount: uint }))
)
    (begin
        ;; Guard 1: list must not be empty
        (asserts! (> (len tips) u0) ERR_INVALID_AMOUNT)

        ;; Guard 2: validate every entry and compute total STX required
        ;;   - rejects any recipient that is self or contract owner
        ;;   - rejects any zero or over-limit amount
        ;;   - accumulates grand total across all entries
        (match (fold validate-tip-entry tips (ok u0))
            total-required
            (begin
                ;; Guard 3: sender must have enough balance to cover everything upfront
                (asserts! (>= (stx-get-balance tx-sender) total-required) ERR_INSUFFICIENT_FUNDS)

                ;; Assign a unique batch ID for this batch's log entries
                (let ((batch-id (+ (var-get multi-tip-nonce) u1)))
                    (var-set multi-tip-nonce batch-id)
                    (var-set temp-batch-id batch-id)

                    ;; Execute all transfers atomically  any failure reverts everything
                    (match (fold execute-single-tip-entry tips (ok u0))
                        tips-processed (ok tips-processed)
                        err-val (err err-val)
                    )
                )
            )
            err-val (err err-val)
        )
    )
)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;; Read-only functions ;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;; Get total tips received
(define-read-only (get-total-tips-received (recipient principal))
  (let 
    (
      ;; Retrieve the current user stats
      (current-stats (default-to 
                        { total-tips-received: u0 }
                        (map-get? user-tip-stats recipient)))
    )
    ;; Return the total tips received
    (get total-tips-received current-stats)
  )
)



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Multi-Tip Read-only functions ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Retrieve a specific tip entry from a multi-tip batch.
;; Returns (some { sender, recipient, amount, timestamp }) or none.
(define-read-only (get-multi-tip-entry (batch-id uint) (tip-index uint))
    (map-get? multi-tip-history { batch-id: batch-id, tip-index: tip-index })
)

;; Get the total number of multi-tip batches sent so far (also the latest batch-id).
(define-read-only (get-multi-tip-nonce)
    (var-get multi-tip-nonce)
)



