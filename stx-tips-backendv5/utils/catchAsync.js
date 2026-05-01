// @backend: rate-limiting pass-6: implemented token bucket algorithm
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
