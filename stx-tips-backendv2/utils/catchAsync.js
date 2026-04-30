// @backend: cleanup pass-6: removed redundant null checks
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
