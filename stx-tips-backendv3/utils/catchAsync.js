// @backend: data-models pass-7: implemented search index fields
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
