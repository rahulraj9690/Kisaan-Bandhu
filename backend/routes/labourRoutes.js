const express = require("express");
const router = express.Router();
const Labour = require("../models/Labour");

// POST /add - Add new labour request
router.post("/add", async (req, res) => {
  try {
    const data = new Labour(req.body);
    await data.save();
    res.json({ message: "Labour request saved successfully" });
  } catch (error) {
    console.error("Error saving labour request:", error);
    res.status(500).json({ error: "Failed to save labour request" });
  }
});

// GET / - Get all labour requests
router.get("/", async (req, res) => {
  try {
    const labours = await Labour.find();
    res.json(labours);
  } catch (error) {
    console.error("Error fetching labours:", error);
    res.status(500).json({ error: "Failed to fetch labour requests" });
  }
});

module.exports = router;