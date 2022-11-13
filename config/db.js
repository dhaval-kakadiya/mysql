const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.HOST,
    port: 3306,
    dialect: "mysql",
  }
);

connection
  .authenticate()
  .then(() => {
    console.log(`Connection Successfull`);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = connection;

db.City = require("../models/city")(connection, DataTypes);
db.User = require("../models/user")(connection, DataTypes, db.City);

db.Game = require("../models/game")(connection, DataTypes);

db.GameUser = require("../models/gameUser")(connection, DataTypes, db.Game, db.User);

//  one to many relationship
db.City.hasMany(db.User, { foreignKey: "cityId" });
db.User.belongsTo(db.City, { foreignKey: "cityId" });

//  many to many relationship
db.User.belongsToMany(db.Game, {
  through: db.GameUser,
  foreignKey: "user",
});

db.Game.belongsToMany(db.User, {
  through: db.GameUser,
  foreignKey: "game",
});

//  second method for many to many relationship
// no need to declare model, default model created through name 
//  many to many relationship

// db.User.belongsToMany(db.Game, {
//     through: "gameUser",
//     foreignKey: "user",
//   });
  
//   db.Game.belongsToMany(db.User, {
//     through: "gameUser",
//     foreignKey: "game",
//   });

module.exports = db;