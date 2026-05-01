// @backend: i18n-support pass-3: implemented message catalog loader
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
