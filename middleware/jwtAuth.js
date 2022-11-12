const jwt =require('jsonwebtoken');
const User = require('../models/user');

module.exports = (roles) => (req,res,next) => {
    try {
        const authorizetion = req.get('Authorization');
        if(!authorizetion){
            return res.status(422).json({
                success : false,
                message : 'Enter Token'
            })
        }

        const spliteToken = authorizetion.split(' ');
        const authToken = spliteToken[1]

        const decode = jwt.verify(authToken , process.env.SECRET_KEY)

        const role=decode.role
        if(roles.includes(role)){
            req.user = decode
            next()
        }

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
}