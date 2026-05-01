// @backend: middleware-layer pass-5: added response time header
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
