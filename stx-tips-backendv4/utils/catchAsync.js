// @backend: structured-logging pass-1: added Winston logger initialization
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
