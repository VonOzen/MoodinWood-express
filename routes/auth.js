const router = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../validation')

// REGISTER
router.post('/register', async (req, res) => {

  // Validate
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details)

  // Password hashing
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  // Checking user's existence
  const emailExists = await User.findOne({ email: req.body.email })
  if (emailExists) return res.status(400).send(`${req.body.email} already exists`)

  // Creating user
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  })

  try {
    const { _id: userId, username, email } = await user.save()
    res.send({
      userId,
      username,
      email,
    })
  } catch (err) {
    res.status(400).send(err)
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  // Validate
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details)

  // Checking user's existence
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Invalid credentials')

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(400).send('Invalid credentials')

  // Create and assign JWT
  const token = jwt.sign({
    _id: user._id,
  }, process.env.TOKEN_SECRET)

  res.header('auth-token', token).send(token)
})

module.exports = router
