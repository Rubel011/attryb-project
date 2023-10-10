const { successResponse, errorResponse } = require("../helpers/successAndError");
const OEM_Specs = require("../models/car_specs_model");

module.exports.addNewCarspecs = async (req, res) => {
    try {
        const {
            modelName,
            yearOfModel,
            listPrice,
            availableColors,
            mileage,
            powerInBHP,
            maxSpeed,
        } = req.body;

        const newSpec = new OEM_Specs({
            modelName,
            yearOfModel,
            listPrice,
            availableColors,
            mileage,
            powerInBHP,
            maxSpeed,
        });

        const savedSpec = await newSpec.save();

        return res.status(201).json(successResponse(201, "car specs added successfully", savedSpec));
    } catch (err) {
        console.error(err);
        res.status(500).json(errorResponse(500, err.message));
    }
}

module.exports.updateCarSpecs = async (req, res) => {
    try {
        const updatedSpec = await OEM_Specs.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedSpec) {
            return res.status(404).json({ message: 'OEM Spec not found' });
        }

        return res.status(200).json(updatedSpec);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.deleteCarSpecs = async (req, res) => {
    try {
        const deletedSpec = await OEM_Specs.findByIdAndRemove(req.params.id);

        if (!deletedSpec) {
            return res.status(404).json({ message: 'OEM Spec not found' });
        }

        return res.status(200).json(successResponse(200, "OEM_spes deleted successfully", null));
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.retriveAllCarSpecs = async (req, res) => {
    try {
        const specs = await OEM_Specs.find();

        return res.status(200).json(successResponse(200, "retriveAllCarSpecs details successfully", specs));
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.searchCarSpecs = async (req, res) => {
    try {
        const { modelName, yearOfModel } = req.query;

        const specs = await OEM_Specs.findOne({
            modelName,
            yearOfModel,
        });

        if (!specs) {
            return res.status(404).json({ message: 'OEM specs not found' });
        }

        return res.status(200).json(specs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}