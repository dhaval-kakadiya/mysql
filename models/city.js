module.exports = (connection,Datatype) => {
    const citySchema = {
        city_name : {
            type : Datatype.STRING
        },
        state : {
            type : Datatype.STRING
        }

    }
    return connection.define('city',citySchema,{
        paranoid : true, //for soft delete
    })
}

