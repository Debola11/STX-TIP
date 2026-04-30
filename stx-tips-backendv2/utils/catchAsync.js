// @backend: consistency pass-5: consistent error object shape
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
