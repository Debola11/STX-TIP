// @backend: code-quality pass-4: standardized return patterns
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
