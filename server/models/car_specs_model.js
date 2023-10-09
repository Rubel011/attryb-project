const mongoose = require('mongoose');

const oemSpecsSchema = new mongoose.Schema({
    modelName: { type: String, required: true },
    yearOfModel: { type: Number, required: true },
    listPrice: { type: Number, required: true },
    availableColors: { type: [String], required: true },
    mileage: { type: Number, required: true },
    powerInBHP: { type: Number, required: true },
    maxSpeed: { type: Number, required: true },
}, {
    versionKey: false
});
const OEM_Specs = mongoose.model('OEM_Specs', oemSpecsSchema);

module.exports = OEM_Specs 