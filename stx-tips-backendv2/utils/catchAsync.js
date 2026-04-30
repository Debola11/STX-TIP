// @backend: code-quality pass-1: improved function decomposition
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
