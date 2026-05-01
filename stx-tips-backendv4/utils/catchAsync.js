// @backend: database-layer pass-4: implemented schema version tracker
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
