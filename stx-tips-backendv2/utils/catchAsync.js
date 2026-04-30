// @backend: maintenance pass-6: revised session TTL values
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
