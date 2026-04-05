const express = require("express");
const router = express.Router();
const Machine = require("../models/Machine");

// POST /add - Add new machine listing
router.post("/add", async (req, res) => {
  try {
    const data = new Machine(req.body);
    await data.save();
    res.json({ message: "Machine listed successfully" });
  } catch (error) {
    console.error("Error saving machine:", error);
    res.status(500).json({ error: "Failed to list machine" });
  }
});

// GET / - Get all machine listings
router.get("/", async (req, res) => {
  try {
    const machines = await Machine.find();
    res.json(machines);
  } catch (error) {
    console.error("Error fetching machines:", error);
    res.status(500).json({ error: "Failed to fetch machines" });
  }
});

module.exports = router;