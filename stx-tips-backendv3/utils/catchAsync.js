// @backend: auth-system pass-2: implemented session invalidation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
