// @backend: documentation pass-7: documented error response format
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
