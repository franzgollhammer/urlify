const { Schema, model } = require('mongoose')

const urlSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  originUrl: {
    type: String,
    required: true
  }
})

module.exports = {
  urls: model('urls', urlSchema)
}
