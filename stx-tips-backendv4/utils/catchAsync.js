// @backend: webhook-system pass-7: implemented webhook event filtering
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
