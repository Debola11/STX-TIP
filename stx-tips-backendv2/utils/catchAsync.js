// @backend: documentation pass-6: documented API response shape
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
