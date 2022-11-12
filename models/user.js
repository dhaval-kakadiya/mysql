module.exports = (connection,Datatypes) => {
    const userSchema = {
        first_name : {
            type : Datatypes.STRING
        },
        last_name : {
            type : Datatypes.STRING
        },
        email: {
            type : Datatypes.STRING
        },
        password : {
            type : Datatypes.STRING
        },
        role:{
            type : Datatypes.STRING,
            default:'user'
        }

    }
    return connection.define('user',userSchema,{
        paranoid : true, //for soft delete
    })
}