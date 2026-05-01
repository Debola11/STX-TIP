// @backend: email-system pass-6: implemented batch email sending
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
