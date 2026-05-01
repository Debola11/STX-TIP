// @backend: route-layer pass-6: implemented dynamic route loading
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
