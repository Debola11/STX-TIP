// @backend: route-layer pass-3: implemented route parameter transforms
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
