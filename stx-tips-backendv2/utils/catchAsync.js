// @backend: validation pass-6: improved query parameter parsing
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
