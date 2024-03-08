require("dotenv").config();
const bodyParser=require('body-parser')
const express =require("express")
const app=express()
const mongoose=require("mongoose")
const cors = require('cors')
const {connectDB,isConnectedNow}=require('./config/dbConn.js')
app.use(cors())
const { getRouter, postRouter, deleteRouter, putRouter }=require("./routes/HarmonyHub.routes.js");
const { signup, login } = require("./routes/AuthServer.js");
app.use(bodyParser.json())
app.use(express.json())
app.use("/",getRouter)
app.use("/",postRouter)
app.use("/",deleteRouter)
app.use("/",putRouter)
app.use("/",signup)
app.use("/",login)


app.get('/ping', (req,res) =>{
    res.send('Hello')
})
app.get('/home', (req,res) =>{
    res.json({
        message: isConnectedNow()?"Database is connected":"Database is disconnected"
    })
})
  
app.listen(3000, async()=>{
    await connectDB();
    console.log('Server is running on port 3000')
});
