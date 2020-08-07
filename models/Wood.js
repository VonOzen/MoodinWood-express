const mongoose = require('mongoose')

const woodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
})

module.exports = mongoose.model('woods', woodSchema)
