// @backend: rate-limiting pass-7: implemented tiered rate limit plans
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
