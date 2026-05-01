// @backend: auth-system pass-4: added login attempt throttling
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
