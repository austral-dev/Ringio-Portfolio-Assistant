import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Trabajo Integrador TP2 API',
      version: '1.0.0',
      description: 'Documentación de la API del Trabajo Integrador TP2',
    },
    servers: [
      {
        url: 'http://localhost:1337/api/v1',
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'ID autogenerado por MongoDB',
              example: '60c72b2f9b1d8b2bad034a81',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Correo electrónico del usuario',
              example: 'user@example.com',
            },
            password: {
              type: 'string',
              description: 'Contraseña del usuario',
              example: 'mysecretpassword',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de creación',
              example: '2026-06-10T17:30:00.000Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de última actualización',
              example: '2026-06-10T17:30:00.000Z',
            },
          },
        },
        RegisterRequest: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: {
              type: 'string',
              format: 'email',
              description: 'Correo electrónico del usuario',
              example: 'user@example.com',
            },
            password: {
              type: 'string',
              description: 'Contraseña del usuario',
              example: 'mysecretpassword',
            },
          },
        },
        LoginRequest: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: {
              type: 'string',
              format: 'email',
              description: 'Correo electrónico del usuario',
              example: 'user@example.com',
            },
            password: {
              type: 'string',
              description: 'Contraseña del usuario',
              example: 'mysecretpassword',
            },
          },
        },
        LoginResponse: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
              description: 'JWT Bearer token para autenticación',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
          },
        },
        ChatRequest: {
          type: 'object',
          required: ['message'],
          properties: {
            message: {
              type: 'string',
              description: 'El mensaje que se envía al asistente de IA',
              example: 'Hola, ¿cómo estás?',
            },
          },
        },
        ChatResponse: {
          type: 'object',
          properties: {
            response: {
              type: 'string',
              description: 'Respuesta generada por el asistente de IA',
              example: '¡Hola! Estoy muy bien, ¿en qué te puedo ayudar hoy?',
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            errMsg: {
              type: 'string',
              description: 'Mensaje de error detallado',
              example: 'Error interno del servidor.',
            },
            msg: {
              type: 'string',
              description: 'Mensaje de error alternativo para auth',
              example: 'Usuario no autorizado',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.route.js', './src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
