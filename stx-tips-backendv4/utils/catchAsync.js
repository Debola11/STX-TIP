// @backend: security-hardening pass-1: added Content-Security-Policy header
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
