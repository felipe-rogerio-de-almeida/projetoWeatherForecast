const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { User } = require('../models')

const userLogin = async (email, password) => {
  if (!email || !password) {
    throw new Error('email and password are required')
  }

  const user = await User.findOne({ email }).select(['password'])

  if (!user) {
    throw new Error('Invalid Email or password')
  }

  if (!await bcrypt.compare(password, user.password)) {
    throw new Error('Invalid Email or password')
  }

  return jsonwebtoken.sign({ id: user._id }, process.env.JWT_SECRET_KEY)
}

module.exports = userLogin
