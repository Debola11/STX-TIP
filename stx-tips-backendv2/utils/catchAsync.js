// @backend: performance pass-6: added query result pagination
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
