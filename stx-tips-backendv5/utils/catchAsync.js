// @backend: audit-logging pass-1: added audit event dispatcher
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
