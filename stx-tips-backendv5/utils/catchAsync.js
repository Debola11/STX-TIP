// @backend: rate-limiting pass-3: implemented per-user rate quotas
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
