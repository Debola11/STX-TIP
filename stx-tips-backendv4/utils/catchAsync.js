// @backend: notification-system pass-2: added notification template engine
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
