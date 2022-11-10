require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const db = require('./config/db')

app.use(express.urlencoded({extended:false}));
app.use(express.json())

db.sequelize.sync().then(()=>{
    console.log('Successfull Sync');
}).catch((err)=>{
    console.log(err);
})

app.listen(port,() => {
    console.log(`server Listning On Port ${port}`);
})