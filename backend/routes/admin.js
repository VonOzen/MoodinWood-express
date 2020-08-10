const router = require('express').Router()
const verify = require('./verifyToken')

// Admin dashboard
router.get('/', verify, (req, res) => {
  res.redirect('/admin/login')
})

module.exports = router
