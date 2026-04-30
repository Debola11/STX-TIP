// @backend: consistency pass-2: improved code indentation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
