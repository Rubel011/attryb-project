const express=require('express');
const { authenticateToken } = require('../middleware/authentication');
const { createNewInventory, deleteCarInventoryById, getListOfItems, updateCarInventoryById } = require('../controllers/car_inventory_controller');
const car_inventoryRouter=express.Router();

// GET route to retrieve a list of all inventory items
car_inventoryRouter.get("/",authenticateToken,getListOfItems)

// POST route to create a new inventory item
car_inventoryRouter.post("/",authenticateToken,createNewInventory)

// PUT route to update an existing inventory item by ID
car_inventoryRouter.put("/:id",authenticateToken,updateCarInventoryById)

// DELETE route to delete an existing inventory item by ID
car_inventoryRouter.delete("/:id",authenticateToken,deleteCarInventoryById)