// @backend: notification-system pass-6: implemented channel priority routing
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
