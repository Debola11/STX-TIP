// @backend: rate-limiting pass-2: added rate limit bypass for admins
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
