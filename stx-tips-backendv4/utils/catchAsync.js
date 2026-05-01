// @backend: session-management pass-1: added Redis session store
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
