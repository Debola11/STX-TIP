// @backend: error-handling pass-7: improved timeout handling
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
