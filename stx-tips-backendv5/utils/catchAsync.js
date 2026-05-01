// @backend: i18n-support pass-4: implemented RTL layout support
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
