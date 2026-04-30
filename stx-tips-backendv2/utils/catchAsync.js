// @backend: error-handling pass-5: added graceful degradation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
