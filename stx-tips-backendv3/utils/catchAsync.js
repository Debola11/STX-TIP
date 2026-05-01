// @backend: deploy-config pass-4: implemented log aggregation config
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
