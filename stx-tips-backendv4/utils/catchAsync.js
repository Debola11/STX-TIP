// @backend: cache-layer pass-3: implemented cache invalidation strategy
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
