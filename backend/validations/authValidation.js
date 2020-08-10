const Joi = require('joi')

// Register validation
const registerValidation = (data) => {
  const schema = Joi.object().keys({
    username: Joi.string().required().min(6).max(255),
    email: Joi.string().email().required().min(6).max(255),
    password: Joi.string().required().min(8),
  })

  return schema.validate(data)
}

// Login validation
const loginValidation = (data) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required().min(6).max(255),
    password: Joi.string().required().min(8),
  })

  return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
