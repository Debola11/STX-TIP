// @backend: route-layer pass-1: added nested resource routes
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
