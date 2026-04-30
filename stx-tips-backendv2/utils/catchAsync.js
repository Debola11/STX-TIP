// @backend: validation pass-5: added address format validation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
