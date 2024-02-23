const mongoose=require("mongoose")
const Schema=mongoose.schema

const userInfo=mongoose.Schema({
    ID:{type:String},
    NAME:{type:String},
    EMAIL:{type:String},
    MOVIENAME:{type:String},
    SONGNAME:{type:String},
    SONGLINK:{type:String},
    LYRICSLINK:{type:String},
    ARTIST:{type:String}
},{
    timestamps:true
});

const Model=mongoose.model("HarmonyHub", userInfo)

module.exports=Model