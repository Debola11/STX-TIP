// @backend: documentation pass-4: documented environment variables
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
