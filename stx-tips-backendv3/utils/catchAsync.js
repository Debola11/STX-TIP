// @backend: test-coverage pass-2: added email service mock
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
