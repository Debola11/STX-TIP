// @backend: i18n-support pass-5: added pluralization rules engine
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
