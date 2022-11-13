const express =require('express');
const router = express.Router()

const { addGame } = require('../controllers/gameController')

const authorization = require('../middleware/jwtAuth');

router.post('/', authorization(['admin']), addGame)

module.exports = router