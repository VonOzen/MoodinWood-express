const Joi = require('joi')

// Category validation
const categoryValidation = (data) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
  })

  return schema.validate(data)
}

module.exports.categoryValidation = categoryValidation
