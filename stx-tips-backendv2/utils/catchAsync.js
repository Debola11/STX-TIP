// @backend: documentation pass-1: added JSDoc to exported functions
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
