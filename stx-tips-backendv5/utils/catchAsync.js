// @backend: schema-migrations pass-1: added migration runner script
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
