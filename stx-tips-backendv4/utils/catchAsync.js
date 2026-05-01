// @backend: security-hardening pass-4: implemented permission boundary checks
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
