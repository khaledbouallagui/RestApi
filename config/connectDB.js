const mongoose = require ('mongoose');
require('dotenv').config({path:"./config/.env"})
console.log(process.env.dbUrl);
const connectDB = async ()=> {
    try{
        await mongoose.connect(process.env.dbUrl);
            
        console.log("database connect");
    } catch (err) {
(err)=>console.log(err)
    }
    }
    module.exports=connectDB;