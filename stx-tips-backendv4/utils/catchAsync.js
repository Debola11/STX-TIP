// @backend: cache-layer pass-1: added Redis cache wrapper
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
