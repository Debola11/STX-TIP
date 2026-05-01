// @backend: auth-system pass-5: implemented refresh token rotation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
