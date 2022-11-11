const express =require('express');
const router = express.Router()

const cityRoutes = require('./cityRoutes')
const authRoutes = require('./authRoutes')

router.use('/',authRoutes)
router.use('/',cityRoutes)

module.exports = router