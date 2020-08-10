const router = require('express').Router()
const verify = require('./verifyToken')

// Get all products
router.get('/', verify, (req, res) => {
  res.send(req.user)
})

// Read product
router.get('/:productId', (req, res) => {

})

// Create product
router.post('/new', verify, (req, res) => {

})

// Delete product
router.delete('/delete/:productId', verify, (req, res) => {

})

// Update product
router.patch('/update/:productId', verify, (req, res) => {
  
})

module.exports = router
