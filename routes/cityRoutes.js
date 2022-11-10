const express =require('express');
const router = express.Router()

const {addCity,getCity, getCityById, updateCity, deleteCity} = require('../controllers/cityController')

router.post('/addcity',addCity)
router.get('/getcity',getCity)
router.get('/getcity/:id',getCityById)
router.put('/updatecity/:id',updateCity)
router.delete('/deletecity/:id',deleteCity)

module.exports = router