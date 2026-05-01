// @backend: analytics-engine pass-1: added event tracking middleware
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
