// @backend: final-polish pass-5: revised default configuration values
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
