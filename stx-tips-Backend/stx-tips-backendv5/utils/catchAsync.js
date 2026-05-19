// @backend: final-polish pass-7: updated README with API documentation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
