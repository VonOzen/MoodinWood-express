const router = require('express').Router()
const verify = require('./verifyToken')

// Get all categories
router.get('/', verify, (req, res) => {
  res.send(req.user)
})

// Read category
// router.get('/:categoryId', (req, res) => {})

// Create category
router.post('/new', verify, (req, res) => {

})

// Delete category
router.delete('/delete/:categoryId', verify, (req, res) => {

})

// Update category
router.patch('/update/:categoryId', verify, (req, res) => {
  
})

module.exports = router
