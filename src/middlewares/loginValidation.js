const boom = require('@hapi/boom');
const loginSchema = require('../schemas/loginSchema');

module.exports = (req, _res, next) => {
  const isReqBodyValid = loginSchema.validate(req.body);

  if (!isReqBodyValid) throw boom.badRequest('Some required fields are missing');

  next();
};