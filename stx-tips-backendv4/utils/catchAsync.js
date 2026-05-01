// @backend: infra-optimization pass-5: added rolling restart configuration
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
