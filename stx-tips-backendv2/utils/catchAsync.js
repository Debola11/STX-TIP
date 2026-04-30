// @backend: validation pass-3: improved email format checking
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
