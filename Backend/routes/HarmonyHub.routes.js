const express = require('express')
const getRouter = express.Router();
const postRouter = express.Router();
const putRouter = express.Router();
const deleteRouter = express.Router();
const HarmonyHub = require("../Model/HarmonyHub.model");
const jwt = require('jsonwebtoken')
const Joi=require('joi')

const schema=Joi.object({
    ID:Joi.string().required(),
    USERNAME:Joi.string().required(),
    EMAIL:Joi.string().required(),
    MOVIENAME:Joi.string().required(),
    SONGNAME:Joi.string().required(),
    SONGLINK:Joi.string().required(),
    LYRICSLINK:Joi.string().required(),
    ARTIST:Joi.string().required()
})
const authenticateToken = (req, res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
      if(err) return res.sendStatus(403)
      next()
    })
  }
getRouter.get('/getallharmonyhub',authenticateToken, async (req, res) => {
    try {
        const harmonyHubs = await HarmonyHub.find();
        res.status(200).json(harmonyHubs);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

getRouter.get('/getharmonyhub/:id',authenticateToken, async (req, res) => {
    try {
        const harmonyHub = await HarmonyHub.findOne({ deviceId: req.params.id });
        if (!harmonyHub) {
            return res.status(404).send({
                message: "Harmony Hub not found"
            });
        }
        res.status(200).json(harmonyHub);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

postRouter.post('/addharmonyhub',authenticateToken, async (req, res) => {
    const {error, value}=schema.validate(req.body, {abortEarly:false});
    try {
        if(!error){
        const {ID,USERNAME,EMAIL,MOVIENAME,SONGNAME,SONGLINK,LYRICSLINK,ARTIST} = req.body
        const newHarmonyHub = await HarmonyHub.create({ID,USERNAME,EMAIL,MOVIENAME,SONGNAME,SONGLINK,LYRICSLINK,ARTIST});
        res.status(201).json(newHarmonyHub);}
        else{
            return res.status(400).send({
                message: `Bad request, error:${error}`
            })
            console.error(error)
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

putRouter.patch('/updateharmonyhub/:id',authenticateToken, async (req, res) => {
    const {error, value}=schema.validate(req.body, {abortEarly: false});
    try {
        if(!error){
        const harmonyHubId = req.params.id;
        const updateData = req.body;

        const updatedHarmonyHub = await HarmonyHub.findOneAndUpdate(
            { ID: harmonyHubId },
            { $set: updateData },
            { new: true }
        );

        if (!updatedHarmonyHub) {
            return res.status(404).send({
                message: "Harmony Hub not found"
            });
        }

        res.status(200).json(updatedHarmonyHub);
    }else{
        return res.status(400).send({
            message: `Bad request, error:${error}`
        })
        console.error(error)
    }}catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});


deleteRouter.delete('/deleteharmonyhub/:id',authenticateToken, async (req, res) => {
    try {
        const harmonyHubId = req.params.id;
        const deletedHarmonyHub = await HarmonyHub.findOneAndDelete({"ID":harmonyHubId});  
        res.status(200).json("deleted HarmonyHub");
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

module.exports = { getRouter, postRouter, deleteRouter, putRouter };
