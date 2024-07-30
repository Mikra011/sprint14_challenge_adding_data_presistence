// build your `/api/projects` router here,
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    const projects = await Project.getProjects()
    res.status(200).json(projects)
})

router.post('/', async (req, res) => {
    try {
        const project = await Project.addProject(req.body)
        res.status(201).json(project)
    } catch (err) {
        res.status(400).json({ message: 'Invalid project data' })
    }
})


module.exports = router