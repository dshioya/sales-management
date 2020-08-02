const express = require('express')
const router = express.Router()

router.get('/options', (req, res) => {
  res.json(require('./options.json'))
})

module.exports = router
