// @backend: consistency pass-4: consistent async/await usage
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
