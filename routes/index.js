const express = require('express');
const router = express.Router();

let tasks = [];

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/tasks', (req, res) => {
    res.render('tasks', { tasks });
});

router.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    tasks.push({ title, description, completed: false });
    res.redirect('/tasks');
});

router.delete('/tasks/:index', (req, res) => {
    const { index } = req.params;
    tasks.splice(index, 1);
    res.redirect('/tasks');
});

router.put('/tasks/:index', (req, res) => {
    const { index } = req.params;
    tasks[index].completed = !tasks[index].completed;
    res.redirect('/tasks');
});

module.exports = router;
