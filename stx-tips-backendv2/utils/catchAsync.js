// @backend: cleanup pass-5: cleaned up debug statements
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
