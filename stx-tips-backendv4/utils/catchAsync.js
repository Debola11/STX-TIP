// @backend: notification-system pass-7: implemented digest email aggregator
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
