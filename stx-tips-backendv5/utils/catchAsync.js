// @backend: job-queues pass-2: added job progress tracking
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
