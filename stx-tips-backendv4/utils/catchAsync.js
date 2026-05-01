// @backend: webhook-system pass-3: implemented webhook payload signing
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
