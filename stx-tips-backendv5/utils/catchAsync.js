// @backend: final-polish pass-6: prepared production build settings
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
