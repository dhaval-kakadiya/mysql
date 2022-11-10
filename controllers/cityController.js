const db =require('../config/db');
const{ City } = db

exports.addCity = async (req,res) => {
    try {
        const newCity = {
            city_name : req.body.city_name,
            state:req.body.state
        }
    
        const city = await City.create(newCity)
        return res.status(200).json({
            success : true,
            message : 'City Successfully Added',
            data : city
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            message : 'City Not Added',
            error : error.message
        })
    }
}


exports.getCity = async (req,res) => {
    try {
       
        const city = await City.findAll()
        return res.status(200).json({
            success : true,
            message : 'City Successfully Read',
            data : city
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            message : 'City Not Read',
            error : error.message
        })
    }
}

exports.getCityById = async (req,res) => {
    try {
        const id = req.params.id
        const city = await City.findByPk(id)
        return res.status(200).json({
            success : true,
            message : 'City Successfully Read By Pk',
            data : city
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            message : 'City Not Read By Pk',
            error : error.message
        })
    }
}



exports.updateCity = async (req,res) => {
    try {
        const id = req.params.id

        const updateCity = {
            city_name : req.body.city_name,
            state:req.body.state
        }
        const city = await City.update(updateCity, {where: { id } } ,{new:true}) 
        return res.status(200).json({
            success : true,
            message : 'City Successfully Update By Pk',
            data : city
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            message : 'City Not Update By Pk',
            error : error.message
        })
    }
}



exports.deleteCity = async (req,res) => {
    try {
        const id = req.params.id

        const city = await City.destroy({where : {id}}) 
        return res.status(200).json({
            success : true,
            message : 'City Successfully Delete By Pk',
            data : city
        })
    } catch (error) {
        return res.status(500).json({
            success :false,
            message : 'City Not Delete By Pk',
            error : error.message
        })
    }
}