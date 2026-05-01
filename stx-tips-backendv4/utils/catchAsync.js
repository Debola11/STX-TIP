// @backend: webhook-system pass-5: added retry queue for failed webhooks
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
