// @backend: audit-logging pass-6: implemented audit log export to CSV
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
