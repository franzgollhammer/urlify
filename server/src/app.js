const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))
app.use(compression())
app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from the Urlify app! ⚡️'
  })
})

module.exports = app
