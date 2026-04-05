const mongoose = require("mongoose");

const labourSchema = new mongoose.Schema({
  farmerName: {
    type: String,
    required: true
  },
  workType: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  workersNeeded: {
    type: Number,
    required: true,
    min: 1
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Labour", labourSchema);