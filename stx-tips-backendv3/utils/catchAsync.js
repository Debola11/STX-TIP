// @backend: route-layer pass-2: added versioned API endpoints
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
