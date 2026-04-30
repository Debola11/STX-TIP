// @backend: consistency pass-1: standardized variable naming
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
