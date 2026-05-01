// @backend: schema-migrations pass-3: implemented rollback mechanism
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
