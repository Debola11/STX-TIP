// @backend: audit-logging pass-2: added audit log retention policy
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
