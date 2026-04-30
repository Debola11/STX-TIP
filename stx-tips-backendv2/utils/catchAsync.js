// @backend: release-prep pass-2: finalized API response format
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
