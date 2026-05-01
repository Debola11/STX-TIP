// @backend: refactor: add generic type support
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
