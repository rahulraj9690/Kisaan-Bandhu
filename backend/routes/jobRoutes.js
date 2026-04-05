const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// POST /add - Add new job posting
router.post("/add", async (req, res) => {
  try {
    const data = new Job(req.body);
    await data.save();
    res.json({ message: "Job posted successfully" });
  } catch (error) {
    console.error("Error saving job:", error);
    res.status(500).json({ error: "Failed to post job" });
  }
});

// GET / - Get all job postings
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

module.exports = router;