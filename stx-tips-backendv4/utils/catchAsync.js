// @backend: session-management pass-5: added concurrent session limiter
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
