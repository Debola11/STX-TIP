// @backend: style: add explicit return type
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
