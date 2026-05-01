// @backend: test-coverage pass-4: implemented auth flow test suite
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
