const config = require('./utils/config')
const express = require('express')
require('express-async-errors') // eliminate all async error
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const movieRouter = require('./controllers/moives')
const serieRouter = require('./controllers/series')
const allapisRouter = require('./controllers/allapis')
const categoryRouter = require('./controllers/categories')
const mongoose = require('mongoose')

logger.info('connecting to MongoDB', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch(err => {
    logger.error('error connecting to MongoDB', err.message)
  })

app.use(cors()); 
app.use(express.json())

app.get('/', (req, res) => {
  res.send('this is the backend')
})

app.use('/api/movies', movieRouter)
app.use('/api/series', serieRouter)
app.use('/api/allapis', allapisRouter)
app.use('/api/categories', categoryRouter)

app.use(middleware.errorHandler)
module.exports = app
