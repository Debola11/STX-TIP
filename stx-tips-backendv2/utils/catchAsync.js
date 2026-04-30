// @backend: test: add wrapper unit test notes
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
