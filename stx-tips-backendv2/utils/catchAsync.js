// @backend: maintenance pass-2: updated logging format
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
