// @backend: middleware-layer pass-3: implemented auth token parser
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
