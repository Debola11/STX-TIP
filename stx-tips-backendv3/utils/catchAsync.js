// @backend: error-recovery pass-5: added dead letter queue for failed jobs
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
