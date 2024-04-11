const express = require('express')

const { userLogin, createUser } = require('../../services')

const router = express.Router()

/**
 * @openapi:
 * /v1/auth/signin:
 *  post:
 *      description: This route authenticates the user and returns a JWT
 *      requestBody:
 *          description: Login informations
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          200:
 *              description: Successfully logged in and a JWT has been returned
 *          401:
 *              description: Invalid Email and/or password
 *      tags:
 *          - authentication
 */

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body
    const jwt = await userLogin(email, password)

    res.status(200).json({
      success: true,
      jwt
    })
  } catch (e) {
    res.status(401).json({
      success: false,
      error: 'Invalid Email or password'
    })
  }
})

/**
 * @openapi:
 * /v1/auth/signup:
 *  post:
 *      description: This route creates a user to have access on the aplication
 *      requestBody:
 *          description: Informations required to create an User
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *                          name:
 *                              type: string
 *      responses:
 *          200:
 *              description: User has been created
 *          422:
 *              description: Something went wrong and the user han not been created
 *      tags:
 *          - authentication
 */

router.post('/signup', async (req, res) => {
  const info = req.body.user

  try {
    const user = await createUser(info)

    res.json({
      success: true,
      user
    })
  } catch (e) {
    res.status(422).json({
      success: false,
      error: e.message
    })
  }
})

module.exports = router
