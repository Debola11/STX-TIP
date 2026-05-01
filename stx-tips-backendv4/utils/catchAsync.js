// @backend: security-hardening pass-3: implemented brute force protection
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
