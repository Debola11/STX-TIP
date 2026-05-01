// @backend: job-queues pass-1: added Bull queue for background jobs
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
