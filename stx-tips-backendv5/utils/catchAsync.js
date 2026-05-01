// @backend: final-polish pass-2: finalized environment variable names
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
