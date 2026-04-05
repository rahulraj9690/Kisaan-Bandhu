const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
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
  workType: {
    type: String,
    required: true
  },
  workersNeeded: {
    type: Number,
    required: true,
    min: 1
  },
  payRate: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['open', 'filled', 'completed', 'cancelled'],
    default: 'open'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Job", jobSchema);