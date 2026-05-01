// @backend: infra-optimization pass-4: implemented blue-green deploy support
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
