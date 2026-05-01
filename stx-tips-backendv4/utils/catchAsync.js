// @backend: database-layer pass-5: added transaction wrapper utility
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
