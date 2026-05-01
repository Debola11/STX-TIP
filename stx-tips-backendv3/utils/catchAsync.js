// @backend: data-models pass-1: added pre-save hook for timestamps
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
