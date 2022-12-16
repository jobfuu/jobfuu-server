'use strict';

module.exports = (error, req, res, next) => {
  res.status(500).send({
    error: 500,
    route: req.originalUrl,
    query: req.query.body,
    message: typeof(error) === 'string' ? error : `Server error: ${error.message}`,
  });
};