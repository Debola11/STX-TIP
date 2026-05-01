// @backend: database-layer pass-2: added index usage analyzer
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
