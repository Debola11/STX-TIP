// @backend: controller-logic pass-6: added conditional response caching
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
