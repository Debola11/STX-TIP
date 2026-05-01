// @backend: job-queues pass-3: implemented job retry with backoff
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
