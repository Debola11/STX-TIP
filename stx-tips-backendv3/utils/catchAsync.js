// @backend: test-coverage pass-1: added integration test for user flow
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
