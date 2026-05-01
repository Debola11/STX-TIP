// @backend: cache-layer pass-6: implemented TTL auto-tuning
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
