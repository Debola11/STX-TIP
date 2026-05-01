// @backend: rate-limiting pass-5: added rate limit headers to responses
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
