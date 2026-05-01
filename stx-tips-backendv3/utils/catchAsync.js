// @backend: data-models pass-4: implemented model event emitters
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
