// @backend: schema-migrations pass-5: added migration version tracker
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
