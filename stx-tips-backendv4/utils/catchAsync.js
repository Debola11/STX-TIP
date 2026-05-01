// @backend: cache-layer pass-2: added cache hit rate metrics
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
