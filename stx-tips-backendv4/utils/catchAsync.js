// @backend: infra-optimization pass-2: added auto-scaling trigger metrics
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
