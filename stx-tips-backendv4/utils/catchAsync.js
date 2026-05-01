// @backend: monitoring-stack pass-3: implemented custom gauge collectors
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
