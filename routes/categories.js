const router = require('express').Router()
const verify = require('./verifyToken')
const { categoryValidation } = require('../validations/categoryValidation')
const Category = require('../models/Category')

// Get all categories
router.get('/', verify, (req, res) => {
  res.send(req.user)
})

// Read category
// router.get('/:categoryId', (req, res) => {})

// Create category
router.post('/new', verify, async (req, res) => {
  // Validate
  const { error } = categoryValidation(req.body)
  if (error) return res.status(400).send(error.details)

  // Checking category's existence
  const categoryExists = await Category.findOne({ name: req.body.name })
  if (categoryExists) return res.status(400).send(`Category ${req.body.name} already exists`)

  // Creating category
  const category = new Category({
    name: req.body.name,
    description: req.body.description,
  })

  try {
    const { _id: categoryId, name, description } = await category.save()
    res.send({
      categoryId,
      name,
      description,
    })
  } catch (err) {
    res.status(400).send(err)
  }
})

// Delete category
router.delete('/delete/:categoryId', verify, (req, res, next) => {
  Category.findByIdAndDelete(req.params.categoryId)
    .then(result => {
      result.status(200).json({
        message: 'Category successfully deleted',
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      })
    })
})

// Update category
router.patch('/update/:categoryId', verify, (req, res) => {
  Category.findById(req.params.categoryId)
    .then(
      category => {
        category.name = req.body.name
        category.description = req.body.description

        category.save()
          .then(
            () => res.status(200).json(
              {
                status: 'success',
                message: `Category "${category.name}" has been updated`
              }
            )
          )
          .catch(
            err => res.status(400).json(
              {
                status: 'error',
                message: err
              }
            )
          )
      }
    )
    .catch(
      err => res.status(400).json(
        {
          status: 'error',
          message: err
        }
      )
    )
})

module.exports = router
