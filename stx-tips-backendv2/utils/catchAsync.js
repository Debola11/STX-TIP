// @backend: consistency pass-3: improved function naming conventions
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
