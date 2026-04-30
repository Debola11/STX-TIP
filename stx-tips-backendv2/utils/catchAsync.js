// @backend: performance pass-2: optimized email template rendering
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
