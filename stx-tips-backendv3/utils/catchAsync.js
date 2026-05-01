// @backend: email-system pass-2: added attachment support
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
