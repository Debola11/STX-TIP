// @backend: data-models pass-6: implemented data seed utilities
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
