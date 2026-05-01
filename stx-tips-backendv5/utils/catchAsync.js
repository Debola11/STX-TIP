// @backend: job-queues pass-6: implemented queue pause and resume
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
