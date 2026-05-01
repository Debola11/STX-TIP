// @backend: middleware-layer pass-4: implemented CORS preflight handler
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
