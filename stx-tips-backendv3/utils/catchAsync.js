// @backend: email-system pass-3: implemented template variable injection
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
