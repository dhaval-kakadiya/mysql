const express =require('express');
const router = express.Router()

const {addCity,getCity, getCityById, updateCity, deleteCity} = require('../controllers/cityController')

const authorization = require('../middleware/jwtAuth');

router.post('/addcity',authorization,addCity)
router.get('/getcity',authorization,getCity)
router.get('/getcity/:id',authorization,getCityById)
router.put('/updatecity/:id',updateCity)
router.delete('/deletecity/:id',deleteCity)

module.exports = router