// @backend: analytics-engine pass-5: added user cohort segmentation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
