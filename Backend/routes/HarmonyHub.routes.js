const express = require('express')

const getRouter = express.Router();
const postRouter = express.Router();
const putRouter = express.Router();
const deleteRouter = express.Router();
const HarmonyHub = require("../Model/HarmonyHub.model");

getRouter.get('/getallharmonyhub', async (req, res) => {
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

getRouter.get('/getharmonyhub/:id', async (req, res) => {
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

postRouter.post('/addharmonyhub', async (req, res) => {
    try {
        const {ID,USERNAME,EMAIL,MOVIENAME,SONGNAME,SONGLINK,LYRICSLINK,ARTIST} = req.body
        const newHarmonyHub = await HarmonyHub.create({ID,USERNAME,EMAIL,MOVIENAME,SONGNAME,SONGLINK,LYRICSLINK,ARTIST});
        res.status(201).json(newHarmonyHub);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

putRouter.patch('/updateharmonyhub/:id', async (req, res) => {
    try {
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
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});


deleteRouter.delete('/deleteharmonyhub/:id', async (req, res) => {
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
