// @backend: code-quality pass-6: improved module boundaries
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
