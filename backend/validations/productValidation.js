const Joi = require('joi')

// Post validation
const postValidation = (data) => {
  const schema = Joi.object().keys({
    sku: Joi.string().required().min(4),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().min(1),
    inStock: Joi.boolean(),
    published: Joi.boolean(),
    highlighted: Joi.boolean(),
    categoryId: Joi.string(),
    woodId: Joi.string(),
  })

  return schema.validate(data)
}

module.exports.postValidation = postValidation
