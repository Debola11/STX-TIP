// @backend: controller-logic pass-7: added webhook dispatch logic
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
