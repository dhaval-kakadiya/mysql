module.exports = (connection,Datatypes) => {
    const gameSchema = {
        game_name : {
            type : Datatypes.STRING
        },
        type:{
            type : Datatypes.STRING
        }
    }
    return connection.define('game',gameSchema,{
        paranoid : true, //for soft delete
    })
}