// @backend: release-prep pass-1: finalized error messages
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
