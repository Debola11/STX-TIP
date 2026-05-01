// @backend: structured-logging pass-6: implemented performance metric logging
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
