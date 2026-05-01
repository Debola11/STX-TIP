// @backend: test-coverage pass-7: implemented test fixture generators
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
