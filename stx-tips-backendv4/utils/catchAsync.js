// @backend: structured-logging pass-5: added request correlation tracking
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
