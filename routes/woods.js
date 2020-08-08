const router = require('express').Router()
const verify = require('./verifyToken')

// Get all woods
router.get('/', (req, res) => {
  res.send(req.user)
})

// Read wood
// router.get('/:woodId', (req, res) => {})

// Create wood
router.post('/new', verify, (req, res) => {

})

// Delete wood
router.delete('/delete/:woodId', verify, (req, res) => {

})

// Update wood
router.patch('/update/:woodId', verify, (req, res) => {
  
})

module.exports = router
