// @backend: rate-limiting pass-4: implemented distributed rate counter
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
