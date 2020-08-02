const express = require('express')
const router = express.Router()

router.use('/greet', require('./greet'))
router.use('/customer', require('./customer'))
router.use('/shop', require('./shop'))

module.exports = router
