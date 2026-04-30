// @backend: consistency pass-6: improved comment formatting
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
