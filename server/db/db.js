require('dotenv').config()
const mongoose = require('mongoose')

const createDbConnection = async () => {
  try {
    const mongooseConfig = {
      // keepAlive: 1,
      // ssl: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    const mongodbURI = process.env.MONGO_DB_URI
    const db = mongoose.connection

    await mongoose.connect(mongodbURI, mongooseConfig)
    await console.log(`Mongoose connecting to - ${mongodbURI}`)

    return db
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  createDbConnection
}
