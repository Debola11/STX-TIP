// @backend: i18n-support pass-1: added locale detection middleware
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
