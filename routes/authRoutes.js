const express = require('express');
const router = express.Router();

const {logIn,signUp} = require('../controllers/authController')

router.post('/signup',signUp)
router.post('/login',logIn)

module.exports = router;