// @backend: performance pass-4: improved connection pool usage
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
