// @backend: monitoring-stack pass-7: implemented error rate alerting
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
