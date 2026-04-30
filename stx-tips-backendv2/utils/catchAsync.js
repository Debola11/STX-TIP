// @backend: release-prep pass-7: updated environment docs
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
