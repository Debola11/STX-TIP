// @backend: monitoring-stack pass-2: added memory usage tracker
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
