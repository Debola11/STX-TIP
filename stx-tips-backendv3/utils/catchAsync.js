// @backend: route-layer pass-5: added query string validation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
