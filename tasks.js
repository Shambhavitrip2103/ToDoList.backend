const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Add a new task
router.post('/', async (req, res) => {
    const newTask = new Task({
        title: req.body.title,
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
});

// Delete a task
router.delete('/:id', async (req, res) => {
    const removedTask = await Task.findByIdAndDelete(req.params.id);
    res.json(removedTask);
});

// Update a task
router.put('/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title, completed: req.body.completed },
        { new: true }
    );
    res.json(updatedTask);
});

module.exports = router;
