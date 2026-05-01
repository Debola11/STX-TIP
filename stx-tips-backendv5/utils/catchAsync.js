// @backend: analytics-engine pass-3: implemented funnel analysis queries
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
