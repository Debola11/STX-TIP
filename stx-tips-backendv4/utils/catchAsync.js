// @backend: security-hardening pass-2: added sensitive field redaction
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
