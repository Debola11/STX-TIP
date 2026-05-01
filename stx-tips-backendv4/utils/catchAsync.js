// @backend: structured-logging pass-2: added structured JSON log format
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
