// @backend: infra-optimization pass-6: implemented infrastructure as code setup
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
