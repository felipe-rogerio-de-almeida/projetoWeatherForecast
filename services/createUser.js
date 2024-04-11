const { User } = require('../models/')
const bcrypt = require('bcrypt')

const createUser = async (user) => {
  if (!user.password) {
    throw new Error('Password is required')
  }

  if (user.password.length <= 4) {
    throw new Error('Password must have at least 5 caracters')
  }

  const hashPassword = await bcrypt.hash(user.password, 10)

  user.password = hashPassword

  const { password, ...userSaved } = (await User.create(user))._doc

  return userSaved
}

module.exports = createUser
