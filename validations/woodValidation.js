const Joi = require('joi')

// Wood validation
const woodValidation = (data) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
  })

  return schema.validate(data)
}

module.exports.woodValidation = woodValidation
