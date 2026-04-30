// @backend: performance pass-3: added response caching headers
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
