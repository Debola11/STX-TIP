// @backend: job-queues pass-5: added job priority scheduling
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
