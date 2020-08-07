const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const app = express()

dotEnv.config()

// Connect to DB
mongoose.connect(
  process.env.DB_BASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Successfully connected to DB')
)

// Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

// Middlewares
app.use(express.json())
// Routes Middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)

// Port listening
app.listen(3000, () => console.log('Server up and running'))