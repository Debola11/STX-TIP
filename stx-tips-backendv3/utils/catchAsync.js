// @backend: route-layer pass-7: implemented route-level caching
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
