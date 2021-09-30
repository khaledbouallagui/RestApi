const express=require ('express');
const connectDB = require('./config/connectDB');
const app = express ();
const loger=require('./middlewars/loger');
const authoRoutes = require('./routes/authoRoutes')
//middlewars
app.use(express.json())

app.use ("/user",loger)
 app.use("/user",authoRoutes)
//connection DB
connectDB();

//start server
const PORT=5000|| process.env.PORT
app.listen(PORT,(error)=>error ? console.log(error):console.log("Server Is Running in 5000"));
