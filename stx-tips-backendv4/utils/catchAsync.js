// @backend: infra-optimization pass-3: implemented container health probes
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
