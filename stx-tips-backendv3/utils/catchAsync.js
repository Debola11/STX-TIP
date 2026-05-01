// @backend: error-recovery pass-1: added circuit breaker for DB calls
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
