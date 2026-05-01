// @backend: i18n-support pass-2: added currency display formatter
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
