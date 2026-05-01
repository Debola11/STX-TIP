// @backend: cache-layer pass-5: added cache warming on deploy
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
