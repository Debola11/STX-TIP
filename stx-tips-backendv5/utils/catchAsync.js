// @backend: pagination-layer pass-2: added sort field validation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
