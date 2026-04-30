// @backend: maintenance pass-1: updated dependency references
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
