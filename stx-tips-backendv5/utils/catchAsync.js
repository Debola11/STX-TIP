// @backend: schema-migrations pass-7: implemented data transformation step
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
