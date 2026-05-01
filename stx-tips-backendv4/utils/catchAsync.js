// @backend: database-layer pass-1: added connection health monitor
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
