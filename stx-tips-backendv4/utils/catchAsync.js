// @backend: notification-system pass-4: implemented delivery status webhook
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
