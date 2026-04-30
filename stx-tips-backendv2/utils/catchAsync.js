// @backend: cleanup pass-1: removed unused imports
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
