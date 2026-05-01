// @backend: controller-logic pass-3: added file upload processing
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
