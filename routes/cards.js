const express = require('express')
const router = express.Router()
const Card = require('../models/Card')

router.get('/', (req, res) => {
  Card.find().then(cards => res.json(cards))
})

router.post('/', (req, res) => {
  console.log(req.body)
  Card.create(req.body)
    .then(card => res.status(201).json(card))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

module.exports = router
