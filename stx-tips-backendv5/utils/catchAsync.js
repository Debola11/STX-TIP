// @backend: feat: add timeout wrapper option
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
