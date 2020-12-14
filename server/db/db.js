require('dotenv').config()
const mongoose = require('mongoose')

const createDbConnection = async () => {
  const mongooseConfig = {
    // keepAlive: 1,
    // ssl: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  const mongodbURI = process.env.MONGO_DB_URI
  console.log(mongodbURI)
  const db = mongoose.connection

  try {
    console.log(`Mongoose connecting to - ${mongodbURI}`)
    await mongoose.connect(mongodbURI, mongooseConfig)

    db.on('error', () => {
      console.error('🌱 Error connecting to database')
    })

    db.on('connected', () => {
      console.log('🌱 Database connection established...')
    })

    db.on('disconnected', () => {
      console.warn('🌱 Database connection disconnected...')
    })
  } catch (error) {
    throw new Error(error)
  }

  return db
}

module.exports = {
  createDbConnection
}
