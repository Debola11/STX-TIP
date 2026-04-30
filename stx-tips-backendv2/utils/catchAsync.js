// @backend: style: improve code readability
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
