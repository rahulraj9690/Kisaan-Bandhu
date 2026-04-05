require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/kisaanbandhu";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Database Connected"))
  .catch(err => console.error("Database connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Kisaan Bandhu Backend Running");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Backend is running" });
});

// Serve frontend static files (optional, for local development only)
if (process.env.NODE_ENV !== "production") {
  app.use(express.static(path.join(__dirname, "../frontend")));
}

// Start server (only for local development)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;


