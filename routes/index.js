const express =require('express');
const router = express.Router()

const cityRoutes = require('./cityRoutes')
const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoute')
const gameRoutes = require('./gameRoutes')

router.use('/',authRoutes)
router.use('/',cityRoutes)
router.use('/',userRoutes)
router.use('/games',gameRoutes)

module.exports = router