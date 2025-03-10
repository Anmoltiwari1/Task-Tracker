const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Home Page - Show all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.render("index", { tasks });
});

// Add Task
router.post("/add", async (req, res) => {
  await Task.create({ title: req.body.title, description: req.body.description });
  res.redirect("/");
});

// Mark as Completed
router.post("/complete/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, { completed: true });
  res.redirect("/");
});

// Delete Task
router.post("/delete/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
