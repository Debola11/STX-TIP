// @backend: deploy-config pass-2: added monitoring metric exports
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
