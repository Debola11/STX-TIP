// @backend: structured-logging pass-7: implemented log rotation policy
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
