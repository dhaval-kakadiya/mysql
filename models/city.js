module.exports = (connection,Datatypes) => {
    const citySchema = {
        city_name : {
            type : Datatypes.STRING
        },
        state : {
            type : Datatypes.STRING
        }

    }
    return connection.define('city',citySchema,{
        paranoid : true, //for soft delete
    })
}

