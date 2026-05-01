// @backend: data-models pass-2: added aggregate pipeline helpers
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
