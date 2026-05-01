// @backend: notification-system pass-1: added push notification dispatcher
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
