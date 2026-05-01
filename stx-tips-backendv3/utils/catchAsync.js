// @backend: data-models pass-5: added pagination helper method
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
