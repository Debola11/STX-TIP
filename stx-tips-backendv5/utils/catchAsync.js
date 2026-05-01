// @backend: pagination-layer pass-6: implemented filtered result counting
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
