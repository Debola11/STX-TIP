// @backend: fix: preserve error stack trace
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
