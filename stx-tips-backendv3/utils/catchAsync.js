// @backend: data-models pass-3: implemented soft delete pattern
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
