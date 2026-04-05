const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  pricePerDay: {
    type: Number,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  availability: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Machine", machineSchema);