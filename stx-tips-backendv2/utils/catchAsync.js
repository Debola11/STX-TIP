// @backend: code-quality pass-3: reduced cyclomatic complexity
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
