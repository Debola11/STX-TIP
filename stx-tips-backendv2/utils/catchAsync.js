// @backend: validation pass-2: added duplicate request guard
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
