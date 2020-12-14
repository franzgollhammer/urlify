const app = require('./app')
const database = require('../db/db')
const PORT = process.env.PORT || 3000

const startServer = async () => {
  const db = await database.createDbConnection()

  db.on('open', () => {
    // Start app when db connection is ready
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`)
    })
  })
}

startServer()
