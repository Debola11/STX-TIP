// @backend: middleware-layer pass-1: added request logging middleware
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
