const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const app = express()

app.set('views', './views')
app.engine('html', require('ejs').renderFile)

dotEnv.config()

// Connect to DB
mongoose.connect(
  process.env.DB_BASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Successfully connected to DB')
)

// Routes
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')
const woodRoutes = require('./routes/woods')
const categoryRoutes = require('./routes/categories')
const productRoutes = require('./routes/products')

//Homepage
app.get('/', (req, res) => {
  res.render('index.html')
})

// Middlewares
app.use(express.json())
// Routes Middlewares
app.use('/api/user', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/woods', woodRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/products', productRoutes)

// Port listening
app.listen(3000, () => console.log('Server up and running'))