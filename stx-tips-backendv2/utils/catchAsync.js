// @backend: validation pass-4: improved field type coercion
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
