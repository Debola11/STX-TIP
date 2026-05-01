// @backend: error-recovery pass-3: implemented fallback response handler
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
