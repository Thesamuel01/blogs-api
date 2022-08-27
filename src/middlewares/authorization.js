const boom = require('@hapi/boom');
const tokenUtilities = require('../utils/token');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw boom.unauthorized('Token not found');

  tokenUtilities.validateToken(authorization);

  next();
};
