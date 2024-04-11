const { Schema } = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 4
  },
  email: {
    type: String,
    required: true,
    min: 4,
    unique: true,
    validate: {
      validator: (v) => {
        return v.match('@')
      },
      message: props => `${props.value} it is not a valid email address`
    }
  },
  password: {
    type: String,
    required: true,
    select: false
  }
})

module.exports = UserSchema
