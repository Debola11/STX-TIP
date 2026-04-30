// @backend: error-handling pass-6: added request validation guards
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
