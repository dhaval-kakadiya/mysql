const express =require('express');
const router = express.Router()

const {addUser,getUser, getUserById, updateUser, deleteUser} = require('../controllers/userController')

const authorization = require('../middleware/jwtAuth');

router.post('/addUser',authorization(['admin']),addUser)
router.get('/getUser',authorization(['admin','user']),getUser)
router.get('/getUser/:id',authorization(['admin','user']),getUserById)
router.put('/updateUser/:id',authorization(['admin']),updateUser)
router.delete('/deleteUser/:id',authorization(['admin']),deleteUser)

module.exports = router