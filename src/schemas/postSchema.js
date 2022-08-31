const joi = require('joi');

const schema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().items(
    joi.number().required(),
  ),
});

module.exports = (body) => schema.validate(body);
