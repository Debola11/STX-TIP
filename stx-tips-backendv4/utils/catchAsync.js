// @backend: structured-logging pass-4: implemented log transport for file output
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
