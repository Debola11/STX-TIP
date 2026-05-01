// @backend: controller-logic pass-1: implemented bulk update handler
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
