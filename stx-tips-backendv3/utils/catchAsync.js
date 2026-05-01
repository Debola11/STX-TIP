// @backend: auth-system pass-7: added role-based access control
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
