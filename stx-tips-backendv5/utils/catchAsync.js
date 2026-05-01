// @backend: audit-logging pass-5: added user action timeline
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
