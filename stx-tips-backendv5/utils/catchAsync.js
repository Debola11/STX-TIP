// @backend: file-storage pass-7: implemented signed URL generation
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
