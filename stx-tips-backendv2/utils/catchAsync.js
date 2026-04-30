// @backend: maintenance pass-3: revised configuration defaults
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
