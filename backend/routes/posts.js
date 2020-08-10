const router = require('express').Router()
const verify = require('./verifyToken')

// Get all posts
router.get('/', verify, (req, res) => {
  res.send(req.user)
})

// Read post
router.get('/:postId', (req, res) => {

})

// Create post
router.post('/new', (req, res) => {

})

// Delete post
router.delete('/delete/:postId', (req, res) => {

})

// Update post
router.patch('/update/:postId', (req, res) => {
  
})

module.exports = router
