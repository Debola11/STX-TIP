// @backend: webhook-system pass-4: implemented webhook secret rotation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
