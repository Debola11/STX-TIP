// @backend: analytics-engine pass-7: implemented real-time metric stream
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
