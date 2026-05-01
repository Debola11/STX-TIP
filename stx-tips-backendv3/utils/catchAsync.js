// @backend: auth-system pass-6: added OAuth callback handler
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
