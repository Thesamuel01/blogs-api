const joi = require('joi');

const schema = joi.object({
  name: joi.string().required(),
});

module.exports = (body) => schema.validate(body);
