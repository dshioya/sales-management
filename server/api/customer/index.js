const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json(require('./list.json'))
})

module.exports = router
