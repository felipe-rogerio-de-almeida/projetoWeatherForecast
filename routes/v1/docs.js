const swaggerJSDoc = require('swagger-jsdoc')

const swaggerBase = {
  failOnErrors: true,
  openapi: '3.0.0',
  info: {
    title: 'Weather Forecast',
    description: 'Best app to follow the Weather Forecast Worldwide',
    version: '0.0.1'
  },
  components: {
    // securitySchemes: {
    //   auth: {
    //     type: 'http',
    //     scheme: 'bearer',
    //     bearerFormat: 'JWT'
    //   }
    // },
    schemas: {
      User: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'John'
          },
          email: {
            type: 'string',
            example: 'email@example.com'
          }
        }
      }
    }
  }
}

const opcoes = {
  definition: swaggerBase,
  apis: ['./routes/v1/*.js']
}

module.exports = swaggerJSDoc(opcoes)
