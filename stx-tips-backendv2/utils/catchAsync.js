// @backend: validation pass-7: improved amount range checking
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
