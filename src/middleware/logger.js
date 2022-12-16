'use strict';

module.exports = (req, res, next) => {
  console.log(`${req.method} request for ${req.path} status code ${res.statusCode}`)
}