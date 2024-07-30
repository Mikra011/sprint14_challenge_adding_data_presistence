// build your `/api/tasks` router here,
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    const tasks = await Task.getTasks()
    res.status(200).json(tasks)
})

router.post('/', async (req, res) => {
    try {
        const task = await Task.addTask(req.body)
        res.status(201).json(task)
    } catch (err) {
        res.status(400).json({ message: 'Invalid task data' });
    }
})


module.exports = router
