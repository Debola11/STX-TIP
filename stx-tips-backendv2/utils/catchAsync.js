// @backend: error-handling pass-1: added try/catch to async handlers
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
