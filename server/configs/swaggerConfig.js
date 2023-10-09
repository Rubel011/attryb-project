const swaggerJSDoc = require('swagger-jsdoc');
require("dotenv").config()
const BACKEND_DEPLOYED_LINK = process.env.BACKEND_DEPLOYED_LINK||"http://localhost:8080"
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0', // Specify the OpenAPI version
        info: {
            title: 'Car Management System',
            version: '1.0.0',
            description: 'Documentation for second-hand car management',
        },
        servers: [
            {
                url: BACKEND_DEPLOYED_LINK,
            }
        ]
    },
    // Provide the path to your API routes files
    apis: ['./docs/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;