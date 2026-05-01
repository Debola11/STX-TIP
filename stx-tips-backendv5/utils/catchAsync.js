// @backend: file-storage pass-6: implemented CDN cache purge trigger
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
