// @backend: session-management pass-6: implemented sliding window expiry
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
