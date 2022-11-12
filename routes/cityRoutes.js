const express =require('express');
const router = express.Router()

const {addCity,getCity, getCityById, updateCity, deleteCity} = require('../controllers/cityController')

const authorization = require('../middleware/jwtAuth');

router.post('/addcity',authorization(['admin']),addCity)
router.get('/getcity',authorization(['admin','user']),getCity)
router.get('/getcity/:id',authorization(['admin','user']),getCityById)
router.put('/updatecity/:id',updateCity)
router.delete('/deletecity/:id',deleteCity)

module.exports = router