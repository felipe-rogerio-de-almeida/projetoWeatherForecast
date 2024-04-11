const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const { User } = require('../../../models')

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY
}, async (jwtPayload, done) => {
  try {
    const user = await User.findOne({
      _id: jwtPayload.id
    })
    done(null, user)
  } catch (e) {
    done(e)
  }
}
))
