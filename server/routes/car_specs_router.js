const express = require('express');
const { authenticateToken } = require('../middleware/authentication');
const { addNewCarspecs, updateCarSpecs, deleteCarSpecs, retriveAllCarSpecs } = require('../controllers/car_specs_controller');
const car_specsRouter = express.Router();

car_specsRouter.get("/", authenticateToken,retriveAllCarSpecs)

car_specsRouter.post("/", authenticateToken, addNewCarspecs)

car_specsRouter.put("/:id", authenticateToken, updateCarSpecs)

car_specsRouter.delete("/:id", authenticateToken, deleteCarSpecs)


module.exports = car_specsRouter;