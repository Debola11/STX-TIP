// @backend: email-system pass-7: implemented bounce handler
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
