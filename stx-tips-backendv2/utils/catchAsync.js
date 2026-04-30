// @backend: performance pass-5: improved JSON serialization
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
