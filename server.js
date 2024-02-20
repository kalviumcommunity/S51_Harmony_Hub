require("dotenv").config();

const express =require("express")
const app=express()
const mongoose=require("mongoose")
const {connectDB,isConnectedNow}=require('./config/dbConn.js')




app.get('/ping', (req,res) =>{
    res.send('Hello')
})
app.get('/home', (req,res) =>{
    res.json({
        message: isConnectedNow()?"Database is connected":"Database is disconnected"
    })
})
  
app.listen(1000, async()=>{
    await connectDB();
    console.log('Server is running on port 3000')
});
