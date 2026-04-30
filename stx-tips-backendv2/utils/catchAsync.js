// @backend: performance pass-1: optimized database query patterns
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
