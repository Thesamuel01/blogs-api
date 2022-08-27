const boom = require('@hapi/boom');
const schemas = require('../schemas');

module.exports = (req, _res, next) => {
  const { error } = schemas.validateUser(req.body);

  if (error) {
    const [statusCode, message] = error.message.split('|');

    throw boom.boomify(new Error(message), { statusCode });
  }

  next();
};