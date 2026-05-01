// @backend: infra-optimization pass-1: added PM2 ecosystem config
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
