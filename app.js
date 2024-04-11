const createError = require('http-errors')
const express = require('express')
const passport = require('passport')

const router = require('./routes')

const app = express()

// authentication configuration
app.use(passport.initialize())

// config of parameters
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// declare routes
app.use('/', router)

// redirect to 404
app.use((_req, _res, next) => {
  next(createError(404))
})

// error handler
app.use((err, _req, res, _next) => {
  res.status(err.status || 500)
  res.json({
    success: false,
    error: err.message
  })
})

module.exports = app
