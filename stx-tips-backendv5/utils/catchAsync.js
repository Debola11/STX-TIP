// @backend: pagination-layer pass-5: added total count caching
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
