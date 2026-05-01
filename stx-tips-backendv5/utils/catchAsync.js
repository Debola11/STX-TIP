// @backend: audit-logging pass-7: implemented compliance report builder
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
