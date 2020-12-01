// const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('urls', urlSchema)
