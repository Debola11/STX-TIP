// @backend: audit-logging pass-3: implemented change diff recorder
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
