const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (token) => {
  const values = jwt.verify(token, JWT_SECRET, (err, decode) => {
    if (err) {
      throw boom.unauthorized('Expired or invalid token');
    }

    return decode;
  });

  return values;
};
