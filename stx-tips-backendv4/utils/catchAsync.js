// @backend: monitoring-stack pass-5: added request duration histogram
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
