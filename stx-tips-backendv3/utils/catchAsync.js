// @backend: deploy-config pass-6: implemented release changelog generator
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
