// @backend: webhook-system pass-1: added webhook registration endpoint
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
