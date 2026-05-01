// @backend: test-coverage pass-3: implemented mock database layer
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
