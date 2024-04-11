const express = require('express')

const router = express.Router()

require('./auth/jwt')

const statusRouter = require('./status')
const authRouter = require('./auth')
const weatherRouter = require('./weather')

router.use('/status', statusRouter)
router.use('/auth', authRouter)
router.use('/weather', weatherRouter)

// Swagger configuration
const swaggerUi = require('swagger-ui-express')
const swaggerConfig = require('./docs')

router.use('/docs', swaggerUi.serve)
router.use('/docs', swaggerUi.setup(swaggerConfig))

module.exports = router
