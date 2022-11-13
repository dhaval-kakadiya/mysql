const express =require('express');
const router = express.Router()

const cityRoutes = require('./cityRoutes')
const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoute')

router.use('/',authRoutes)
router.use('/',cityRoutes)
router.use('/',userRoutes)

module.exports = router