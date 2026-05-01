// @backend: schema-migrations pass-4: implemented seed data migrations
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
