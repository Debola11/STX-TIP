// @backend: cleanup pass-2: simplified complex callbacks
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
