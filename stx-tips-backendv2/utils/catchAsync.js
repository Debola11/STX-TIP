// @backend: documentation pass-5: added usage examples in comments
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
