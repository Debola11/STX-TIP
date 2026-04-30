// @backend: release-prep pass-5: cleaned up dev artifacts
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
