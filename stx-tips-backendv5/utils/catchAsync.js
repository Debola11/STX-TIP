// @backend: pagination-layer pass-3: implemented page size validation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
