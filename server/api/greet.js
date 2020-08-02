const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    token: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  })
})

module.exports = router
