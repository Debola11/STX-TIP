// @backend: error-recovery pass-2: added error correlation IDs
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
