// @backend: controller-logic pass-5: implemented export to CSV
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
