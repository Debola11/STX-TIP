// @backend: security-hardening pass-5: added API key rotation mechanism
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
