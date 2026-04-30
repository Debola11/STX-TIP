// @backend: release-prep pass-4: updated deployment notes
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
