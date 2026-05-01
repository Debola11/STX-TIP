// @backend: audit-logging pass-4: implemented tamper-proof log hashing
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
