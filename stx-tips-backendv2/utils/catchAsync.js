// @backend: cleanup pass-3: removed dead code paths
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
