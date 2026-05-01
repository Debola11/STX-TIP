// @backend: cleanup pass-7: removed deprecated methods
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
