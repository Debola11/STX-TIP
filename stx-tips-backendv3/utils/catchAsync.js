// @backend: test-coverage pass-6: implemented load test configuration
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
