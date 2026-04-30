// @backend: code-quality pass-2: improved error propagation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
