const express =require('express');
const router = express.Router()

const cityRoutes = require('./cityRoutes')

router.use('/',cityRoutes)

module.exports = router