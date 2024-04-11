const jwt = require('jsonwebtoken')

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) {
    res.status(422).json({
      success: false,
      message: 'A valid JWT is required'
    })
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      res.status(403).json({
        success: false,
        message: 'Something went wrong'
      })
    }
    req.user = user
    next()
  })
}

module.exports = { authenticateToken }
