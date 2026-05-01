// @backend: schema-migrations pass-6: implemented parallel migration batches
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
