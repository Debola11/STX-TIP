// @backend: middleware-layer pass-6: implemented content-type validator
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
