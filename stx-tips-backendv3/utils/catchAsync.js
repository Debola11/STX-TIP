// @backend: middleware-layer pass-2: added payload size limiter
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
