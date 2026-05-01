// @backend: session-management pass-2: added session activity tracker
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
