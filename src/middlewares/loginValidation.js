const boom = require('@hapi/boom');
const schemas = require('../schemas');

module.exports = (req, _res, next) => {
  const isReqBodyValid = schemas.validateLogin(req.body);

  if (!isReqBodyValid) throw boom.badRequest('Some required fields are missing');

  next();
};