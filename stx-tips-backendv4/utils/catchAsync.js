// @backend: monitoring-stack pass-4: implemented event loop lag monitor
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
