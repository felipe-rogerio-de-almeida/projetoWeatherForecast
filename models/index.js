const mongoose = require('mongoose')

const UserSchema = require('./user')

const User = mongoose.model('User', UserSchema)

const connect = async () => {
  console.log('Connecting to Mongoose...')
  await mongoose.connect(process.env.MONGO_URL)
  console.log('Connection established')
}

module.exports = {
  connect,
  User
}
