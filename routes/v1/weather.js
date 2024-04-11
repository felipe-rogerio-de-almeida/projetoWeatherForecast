const express = require('express')
const { getWeather } = require('../../services')
const { authenticateToken } = require('./middleware/authMiddleware')
const router = express.Router()

/**
 * @openapi:
 * /v1/weather:
 *  get:
 *      description: This route returns the weather forecast for the location specified on the body
 *      requestBody:
 *          description: City and Country code are required
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          city:
 *                              type: string
 *                              example: Sao Paulo
 *                          country:
 *                              type: string
 *                              example: BR
 *      responses:
 *          200:
 *              description: Weather forecast has been returned
 *          401:
 *              description: There was an error searching for the weather forecast
 *      tags:
 *          - request
 */

router.get('/', authenticateToken, async (req, res) => {
  try {
    const { city, country } = req.body

    const weatherData = await getWeather(city, country)
    res.json({
      success: true,
      weatherData
    })
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message
    })
  }
})

module.exports = router
