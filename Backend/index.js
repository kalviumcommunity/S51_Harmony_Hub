const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect()

app.listen(3000, ()=>{
    console.log('Server is Running')
})