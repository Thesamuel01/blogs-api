const boom = require('@hapi/boom');
const schemas = require('../schemas');

module.exports = (req, _res, next) => {
  const { error } = schemas.validateCategory(req.body);

  if (error) throw boom.badRequest(error.message);

  next();
};
