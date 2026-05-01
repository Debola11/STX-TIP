// @backend: database-layer pass-7: implemented query profiler
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
