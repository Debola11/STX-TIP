// @backend: final-polish pass-4: updated package scripts section
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
