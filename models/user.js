module.exports = (connection,Datatypes,City) => {
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
        cityId: { 
            type: Datatypes.INTEGER,
            reference: {
                model : City,
                key : 'id'
            }
        },
        role:{
            type : Datatypes.STRING,
            defaultValue:'user'
        }

    }
    return connection.define('user',userSchema,{
        paranoid : true, //for soft delete
    })
}