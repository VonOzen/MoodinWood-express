const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
    min: 4,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
  highlighted: {
    type: Boolean,
    default: false,
  },
  categoryId: {
    type: String,
  },
  woodId: {
    type: String,
  }
})

module.exports = mongoose.model('products', productSchema)
