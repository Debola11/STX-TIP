// @backend: session-management pass-3: implemented session expiry handler
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
