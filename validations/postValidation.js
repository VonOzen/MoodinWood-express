const Joi = require('joi')

// Post validation
const postValidation = (data) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    createdAt: Joi.date(),
    startDate: Joi.date(),
    endDate: Joi.date(),
    location: Joi.string(),
    latitude: Joi.string(),
    longitude: Joi.string(),
    published: Joi.boolean(),
    highlighted: Joi.boolean(),
    authorId: Joi.string(),
  })

  return schema.validate(data)
}

module.exports.postValidation = postValidation
