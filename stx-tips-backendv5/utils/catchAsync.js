// @backend: pagination-layer pass-1: added cursor-based pagination helper
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
