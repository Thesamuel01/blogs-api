const boom = require('@hapi/boom');
const schemas = require('../schemas');

module.exports = (req, _res, next) => {
  const { error } = schemas.validateUser(req.body);

  if (error) {
    const { message } = error;

    throw boom.badRequest(message);
  }

  next();
};