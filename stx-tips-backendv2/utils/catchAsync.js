// @backend: validation pass-1: added input length validation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
