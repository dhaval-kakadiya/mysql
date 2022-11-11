const jwt =require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req,res,next) => {
    try {
        const authorizetion = req.get('Authorization');
        if(!authorizetion){
            return res.status(422).json({
                success : false,
                message : 'Enter Token'
            })
        }
        next()
        // const spliteToken = authorizetion.split(' ');
        // const authToken = spliteToken[1]

        // const decode = jwt.verify(authToken , process.env.SCRET_KEY)

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
}