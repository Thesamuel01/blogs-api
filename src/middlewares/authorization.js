const boom = require('@hapi/boom');
const tokens = require('../token');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw boom.unauthorized('Token not found');

  const { email, id } = tokens.validate(authorization);

  req.user = { email, id };

  next();
};
