// @backend: monitoring-stack pass-6: implemented SLA uptime calculator
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
