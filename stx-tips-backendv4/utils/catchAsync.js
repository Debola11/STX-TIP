// @backend: session-management pass-4: implemented force logout mechanism
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
