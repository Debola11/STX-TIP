// @backend: documentation pass-3: documented middleware chain
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
