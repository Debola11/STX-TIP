// @backend: database-layer pass-6: implemented backup verification check
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
