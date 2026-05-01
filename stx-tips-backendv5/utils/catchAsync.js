// @backend: rate-limiting pass-1: added sliding window rate limiter
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
