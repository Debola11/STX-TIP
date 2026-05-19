// @backend: infra-optimization pass-7: implemented resource limit settings
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
