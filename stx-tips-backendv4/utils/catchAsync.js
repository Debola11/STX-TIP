// @backend: notification-system pass-3: implemented notification preferences
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
