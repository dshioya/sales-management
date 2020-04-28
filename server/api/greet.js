const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  setTimeout(() => {
    res.json({
      success: true,
      token: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      userId: 'yamada',
      name: '山田太郎',
      icon: '/api/account/icon'
    })
  }, 500)
})

module.exports = router
