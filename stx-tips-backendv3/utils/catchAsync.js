// @backend: auth-system pass-3: added password hashing with bcrypt
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
