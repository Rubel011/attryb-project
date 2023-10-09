const mongoose = require('mongoose');

const marketplaceInventorySchema = new mongoose.Schema({
  kmsOnOdometer: { type: Number, required: true },
  majorScratches: { type: Boolean, required: true },
  originalPaint: { type: Boolean, required: true },
  accidentsReported: { type: Number, required: true },
  previousBuyers: { type: Number, required: true },
  registrationPlace: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  price: { required: true, type: Number },
  mileage: { required: true, type: Number },
  description: { type: [String], required: true },
  oem_specsId: { type: mongoose.Schema.Types.ObjectId, ref: 'OEM_Specs', required: true },
  userID: { type: Schema.Types.ObjectId, ref: "Users",required:true }

});

const CarInventory=mongoose.model('Marketplace_Inventory', marketplaceInventorySchema);
module.exports = CarInventory;
