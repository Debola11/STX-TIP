// @backend: documentation pass-2: added parameter descriptions
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
