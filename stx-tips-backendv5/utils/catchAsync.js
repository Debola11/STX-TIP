// @backend: final-polish pass-3: updated all error messages for consistency
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
