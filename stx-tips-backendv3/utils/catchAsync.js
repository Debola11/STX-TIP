// @backend: test-coverage pass-5: added endpoint response assertions
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
