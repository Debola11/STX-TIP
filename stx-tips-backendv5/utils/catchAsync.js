// @backend: i18n-support pass-6: implemented fallback locale chain
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
