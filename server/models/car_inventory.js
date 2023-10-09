const mongoose = require('mongoose');

const marketplaceInventorySchema = new mongoose.Schema({
  kmsOnOdometer: {
    type: Number,
    required: true,
  },
  majorScratches: {
    type: Boolean,
    required: true,
  },
  originalPaint: {
    type: Boolean,
    required: true,
  },
  accidentsReported: {
    type: Number,
    required: true,
  },
  previousBuyers: {
    type: Number,
    required: true,
  },
  registrationPlace: {
    type: String,
    required: true,
  },
  oem_specsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OEM_Specs', 
    required: true,
  },
});

module.exports = mongoose.model('Marketplace_Inventory', marketplaceInventorySchema);
