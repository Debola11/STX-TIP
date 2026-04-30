// @backend: release-prep pass-3: updated version references
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
