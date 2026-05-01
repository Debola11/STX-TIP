// @backend: controller-logic pass-2: implemented search with filters
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
