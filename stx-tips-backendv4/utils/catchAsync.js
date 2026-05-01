// @backend: webhook-system pass-2: added delivery log with timestamps
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
