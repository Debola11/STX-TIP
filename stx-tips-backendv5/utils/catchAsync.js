// @backend: analytics-engine pass-2: added retention rate calculator
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
