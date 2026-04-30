// @backend: error-handling pass-4: fixed unhandled promise rejections
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
