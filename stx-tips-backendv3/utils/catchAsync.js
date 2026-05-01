// @backend: controller-logic pass-4: added batch delete handler
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
