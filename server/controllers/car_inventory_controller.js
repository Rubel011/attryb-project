const { successResponse } = require("../helpers/successAndError");
const CarInventory = require("../models/car_inventory");


module.exports.createNewInventory = async (req, res) => {
    try {
        const {
            kmsOnOdometer,
            majorScratches,
            originalPaint,
            accidentsReported,
            previousBuyers,
            registrationPlace,
            image,
            title,
            price,
            mileage,
            description,
            oem_specsId,
            userID,
        } = req.body;

        const newInventoryItem = new Marketplace_Inventory({
            kmsOnOdometer,
            majorScratches,
            originalPaint,
            accidentsReported,
            previousBuyers,
            registrationPlace,
            image,
            title,
            price,
            mileage,
            description,
            oem_specsId,
            userID,
        });

        const savedItem = new CarInventory(newInventoryItem);

        await savedItem.save();

        return res.status(200).json(successResponse(200, "new inventory item created successfully", savedItem));
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.deleteCarInventoryById = async (req, res) => {
    try {
        const deletedItem = await CarInventory.findByIdAndRemove(req.params.id);

        if (!deletedItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }

        return res.status(200).json(successResponse(200, "car Inventory deleted successfully"));
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports.updateCarInventoryById = async (req, res) => {
    try {
        const {
            kmsOnOdometer,
            majorScratches,
            originalPaint,
            accidentsReported,
            previousBuyers,
            registrationPlace,
            image,
            title,
            price,
            mileage,
            description,
            oem_specsId,
            userID,
        } = req.body;

        const updatedItem = await CarInventory.findByIdAndUpdate(
            req.params.id,
            {
                kmsOnOdometer,
                majorScratches,
                originalPaint,
                accidentsReported,
                previousBuyers,
                registrationPlace,
                image,
                title,
                price,
                mileage,
                description,
                oem_specsId,
                userID,
            }, { new: true })

        if (!updatedItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }

        return res.status(200).json(updatedItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.getListOfItems = async (req, res) => {
    try {
        const inventoryItems = await CarInventory.find().populate('oem_specsId');

        return res.status(200).json(successResponse(200,"retrieved a list of car inventory successfully", inventoryItems));
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}