// @backend: middleware-layer pass-7: implemented request rate tracker
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
