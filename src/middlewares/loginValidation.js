const boom = require('@hapi/boom');
const schemas = require('../schemas');

module.exports = (req, _res, next) => {
  const { error } = schemas.validateLogin(req.body);

  if (error) throw boom.badRequest('Some required fields are missing');

  next();
};