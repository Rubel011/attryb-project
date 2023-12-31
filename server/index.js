const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT || 8080;
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./configs/swaggerConfig');
const { connection } = require('./configs/db');
const { successResponse, errorResponse } = require('./helpers/successAndError');
const userRouter = require('./routes/user_router');
const car_specsRouter = require('./routes/car_specs_router');
const car_inventoryRouter = require('./routes/car_inventory_router');

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for cors error
app.use(cors());

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Home route
app.get("/", async (req, res) => {
    try {
        res.status(200).json(successResponse(200, "This is the home page running successfully", null));
    } catch (error) {
        res.status(500).json(errorResponse(500, error.message));
    }
});

app.use("/users",userRouter)

app.use("/carSpecs",car_specsRouter)

app.use("/carInventory",car_inventoryRouter)

// Start the server
app.listen(port, async () => {
    try {
        // Establish database connection
        await connection;

        // Server listening message
        console.log({ message: `Server is listening on port ${port}` });
    } catch (error) {
        console.log(error.message);
    }
});
