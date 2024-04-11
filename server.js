require('dotenv').config()

const { connect } = require('./models')
const app = require('./app')

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  await connect()

  console.log(`Server running on port ${PORT}`)
})
