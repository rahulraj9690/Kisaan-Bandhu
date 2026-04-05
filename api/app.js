const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const jobRoutes = require("../backend/routes/jobRoutes");
const labourRoutes = require("../backend/routes/labourRoutes");
const machineRoutes = require("../backend/routes/machineRoutes");
const userRoutes = require("../backend/routes/userRoutes");

// Basic health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Kisaan Bandhu Backend Running" });
});

// API Routes
app.use("/jobs", jobRoutes);
app.use("/labour", labourRoutes);
app.use("/machines", machineRoutes);
app.use("/users", userRoutes);

// Fallback route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Kisaan Bandhu Backend API" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error", message: err.message });
});

module.exports = app;
