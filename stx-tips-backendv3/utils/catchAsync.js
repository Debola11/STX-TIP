// @backend: deploy-config pass-5: added environment validation script
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
