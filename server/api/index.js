const express = require('express')
const router = express.Router()

router.use('/greet', require('./greet'))
router.use('/login', require('./login'))
router.use(require('./image'))

module.exports = router
