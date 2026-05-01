// @backend: email-system pass-4: implemented email preview endpoint
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
