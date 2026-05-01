// @backend: job-queues pass-4: implemented queue dashboard endpoint
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
