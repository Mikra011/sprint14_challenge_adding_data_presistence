// build your `/api/resources` router here,
const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    const resources = await Resource.getResources()
    res.status(200).json(resources)
})

router.post('/', async (req, res) => {
    try {
        const resource = await Resource.addResource(req.body)
        res.status(201).json(resource)
    } catch (err) {
        res.status(400).json({ message: 'Resource with the name already exists' })
    }
})

module.exports = router