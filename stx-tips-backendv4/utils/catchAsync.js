// @backend: monitoring-stack pass-1: added Prometheus metrics endpoint
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
