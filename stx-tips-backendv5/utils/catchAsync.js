// @backend: pagination-layer pass-7: implemented infinite scroll support
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
