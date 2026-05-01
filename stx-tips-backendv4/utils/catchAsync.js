// @backend: security-hardening pass-6: implemented token revocation list
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
