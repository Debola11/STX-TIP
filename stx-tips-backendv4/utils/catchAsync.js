// @backend: feat: add request ID to error context
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
