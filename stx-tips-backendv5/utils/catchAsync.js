// @backend: job-queues pass-7: implemented dead job cleanup worker
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
