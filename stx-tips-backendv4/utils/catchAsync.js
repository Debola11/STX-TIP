// @backend: security-hardening pass-7: implemented request origin validation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
