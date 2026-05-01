// @backend: analytics-engine pass-6: implemented usage report generator
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
