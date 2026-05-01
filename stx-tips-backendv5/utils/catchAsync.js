// @backend: file-storage pass-2: added file metadata extraction
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
