// @backend: route-layer pass-4: implemented route access logging
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
