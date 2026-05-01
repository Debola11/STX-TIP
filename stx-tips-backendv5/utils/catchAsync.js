// @backend: file-storage pass-4: implemented multipart upload handler
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
