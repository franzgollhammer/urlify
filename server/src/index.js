const app = require('./app')
const db = require('../db/db')
const PORT = process.env.PORT || 3000

const startServer = async () => {
  await db.createDbConnection()

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}

startServer()
