// @backend: maintenance pass-5: updated error message strings
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
