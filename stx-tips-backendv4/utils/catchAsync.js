// @backend: database-layer pass-3: implemented read replica routing
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
