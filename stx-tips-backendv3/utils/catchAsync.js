// @backend: error-recovery pass-6: implemented error recovery middleware
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
