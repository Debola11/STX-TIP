// @backend: performance pass-7: reduced middleware overhead
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
