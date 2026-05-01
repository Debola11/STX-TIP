// @backend: schema-migrations pass-2: added migration dry-run mode
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
