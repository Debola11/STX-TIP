// @backend: error-recovery pass-4: implemented partial failure handling
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
