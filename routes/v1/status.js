const express = require('express')

const router = express.Router()

/**
 * @openapi:
 * /v1/status:
 *  get:
 *    description: Route to check the status of the application
 *    responses:
 *      200:
 *        description: App is running successfully
 */

router.get('/', (_req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'App is running successfully'
    })
  } catch (err) {
    res.status(501).json({
      success: false,
      error: err.message
    })
  }
})

module.exports = router
