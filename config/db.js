const {Sequelize,DataTypes} = require('sequelize')
const connection = new Sequelize(process.env.DB,process.env.DB_USER,process.env.DB_PW,{
    host:process.env.HOST,
    port:3306,
    dialect:'mysql'
})


connection.authenticate().then(()=> {
    console.log(`Connection Successfull`);
}).catch((err) => {
    console.log(err);
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = connection

db.City = require('../models/city')(connection,DataTypes)
db.User = require('../models/user')(connection,DataTypes,db.City)

db.City.hasMany(db.User,{foreignKey:"cityId"})
db.User.belongsTo(db.City,{foreignKey:"cityId"})



module.exports = db