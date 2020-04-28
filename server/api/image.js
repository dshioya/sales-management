const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/account/icon', (req, res) => {
  res.sendFile(path.join(__dirname, '../images/icon.jpg'))
})

module.exports = router
