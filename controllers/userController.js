const db =require('../config/db');
const{ User, City, Game } = db

exports.addUser = async (req,res) => {
    try {
        const newUser = {
           first_name : req.body.first_name,
           last_name : req.body.last_name,
           email:req.body.email,
           password:req.body.password,
           cityId:req.body.cityId
        }
    
        const user = await User.create(newUser)
        return res.status(200).json({
            success : true,
            message : 'User Successfully Added',
            data : user
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            message : 'User Not Added',
            error : error.message
        })
    }
}


exports.getUser = async (req,res) => {
    try {
        const user = await User.findAll({
            // where: {first_name: "node" }, 
            // attributes: ["first_name"],
            // attributes:{ exclude: ["first_name"] },
            include: [{
              model: City,
            },{
                model: Game,
                through: {
                    attributes: [] 
                }
            }]
          })
        return res.status(200).json({
            success : true,
            message : 'User Successfully Read',
            data : user
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            message : 'User Not Read',
            error : error.message
        })
    }
}

exports.getUserById = async (req,res) => {
    try {
        const id = req.params.id
        const user = await User.findByPk(id, {
            include: [{
              model: City
            }]
          })
        return res.status(200).json({
            success : true,
            message : 'User Successfully Read By Pk',
            data : user
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            message : 'User Not Read By Pk',
            error : error.message
        })
    }
}



exports.updateUser = async (req,res) => {
    try {
        const id = req.params.id

        const updateUser = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email:req.body.email,
            password:req.body.password,
            cityId:req.body.cityId
        }
        const user = await User.update(updateUser, {where: { id } }) 
        return res.status(200).json({
            success : true,
            message : 'User Successfully Update By Pk',
            data : user
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            message : 'User Not Update By Pk',
            error : error.message
        })
    }
}



exports.deleteUser = async (req,res) => {
    try {
        const id = req.params.id

        const user = await User.destroy({where : {id}}) 
        return res.status(200).json({
            success : true,
            message : 'User Successfully Delete By Pk',
            data : user
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            message : 'User Not Delete By Pk',
            error : error.message
        })
    }
}