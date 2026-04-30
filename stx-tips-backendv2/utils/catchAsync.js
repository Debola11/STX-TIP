// @backend: consistency pass-7: standardized log message format
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
