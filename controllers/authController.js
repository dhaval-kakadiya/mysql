const jwt = require("jsonwebtoken");
const db =require('../config/db');
const{ User } = db

exports.signUp = async (req, res) => {
  try {
    const user = {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email : req.body.email,
      password : req.body.password
    }
   
    const userData = await User.create(user);

    return res.status(200).json({
      success: true,
      message: "User Successfully Added",
      data: userData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User Not Added",
    });
  }
};

exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({where:{email}})
    if (!user) {
      return res.status(422).json({
        success: false,
        message: "Invalid Email",
      });
    }
    if (user.password !== password) {
      return res.status(422).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign({
      email: user.email,
      role:user.role
    },process.env.SECRET_KEY,{expiresIn : '24h'});

    return res.status(200).json({
      success: true,
      message: "User Successfull Login",
      data: token
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login Failed",
    });
  }
};
