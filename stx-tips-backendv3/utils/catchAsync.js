// @backend: deploy-config pass-1: added Docker build configuration
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
