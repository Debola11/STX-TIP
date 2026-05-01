// @backend: maintenance pass-7: revised timeout constants
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
