// @backend: file-storage pass-1: added S3 upload adapter
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
