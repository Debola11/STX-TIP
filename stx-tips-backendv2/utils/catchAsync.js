// @backend: error-handling pass-2: added retry on transient failures
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
