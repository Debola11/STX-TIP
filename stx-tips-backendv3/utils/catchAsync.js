// @backend: docs: explain wrapper pattern
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
