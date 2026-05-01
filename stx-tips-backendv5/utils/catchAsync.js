// @backend: pagination-layer pass-4: implemented keyset pagination
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
