const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')
const { notFoundErrorHandler, errorHandler } = require('./middelwares')
const Urls = require('../db/models/url.model')

const app = express()

app.use(morgan('combined'))
app.use(compression())
app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from the Urlify app! ⚡️'
  })
})

app.post('/url', async (req, res) => {
  try {
    const url = await Urls.create({
      name: req.body,
      url: req.body.url
    })
    res.json(url)
  } catch (error) {
    // TODO use internal logger
    console.error(error)
  }
})

// Error handling
app.use(notFoundErrorHandler)
app.use(errorHandler)

module.exports = app
