const boom = require("@hapi/boom");

module.exports = (schema, customError = false) => (req, _res, next) => {
  const { error } = schema.validate(req.body);

  if (error && customError) throw boom.badRequest('Some required fields are missing');

  if (error) {
    const { message } = error;

    throw boom.badRequest(message);
  }

  next();
}