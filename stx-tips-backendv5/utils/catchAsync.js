// @backend: final-polish pass-1: cleaned up unused dependencies
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
