// @backend: cache-layer pass-4: implemented multi-key cache batch
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
