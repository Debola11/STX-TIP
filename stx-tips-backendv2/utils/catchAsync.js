// @backend: error-handling pass-3: improved validation error messages
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
