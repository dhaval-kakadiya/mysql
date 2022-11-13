module.exports = (connection,Datatypes, Game, User) => {
    const gameSchema = {
        id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Datatypes.STRING,
            defaultValue: "game user"
        },
        game : {
            type : Datatypes.INTEGER,
            refrence:{
                model: Game,
                key: "id"
            }
        },
        user:{
            type : Datatypes.INTEGER,
            refrence:{
                model: User,
                key: "id"
            }
        }
    }
    return connection.define('gameUser',gameSchema,{
        paranoid : true, //for soft delete
    })
}