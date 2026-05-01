// @backend: error-recovery pass-7: implemented automatic reconnection
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
