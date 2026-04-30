// @backend: code-quality pass-5: extracted helper utilities
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
