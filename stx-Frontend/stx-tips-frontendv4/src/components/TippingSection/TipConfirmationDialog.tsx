// import React from 'react';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";

// interface TipConfirmationDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   amount: string;
//   recipientInput: string;
//   userInfo: {
//     email?: string;
//     found?: boolean;
//   };
//   onConfirm: () => Promise<void>;
//   transactionInProgress: boolean;
// }

// export const TipConfirmationDialog: React.FC<TipConfirmationDialogProps> = ({
//   open,
//   onOpenChange,
//   amount,
//   recipientInput,
//   userInfo,
//   onConfirm,
//   transactionInProgress,
// }) => {
//   return (
//     <AlertDialog open={open} onOpenChange={onOpenChange}>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Confirm Tip</AlertDialogTitle>
//           <AlertDialogDescription>
//             {userInfo.found ? (
//               `You're about to send ${amount} STX to ${userInfo.email} (${recipientInput}). This will initiate a blockchain transaction.`
//             ) : (
//               `You're about to send ${amount} STX to an unverified address (${recipientInput}). This will initiate a blockchain transaction. Please verify the address is correct before proceeding.`
//             )}
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction 
//             onClick={onConfirm}
//             disabled={transactionInProgress}
//           >
//             {transactionInProgress ? 'Proc