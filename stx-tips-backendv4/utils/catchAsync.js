// @backend: webhook-system pass-6: implemented webhook health dashboard
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
