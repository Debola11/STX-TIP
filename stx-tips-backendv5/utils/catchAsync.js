// @backend: analytics-engine pass-4: implemented A/B test assignment
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
