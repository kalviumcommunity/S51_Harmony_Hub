import React from "react"
import data from "../data.json"
import "./Hub.css"

function Hub (){
    return (
        <>
        <h1>Profile</h1>
        {data.map((profile,index)=>(
            <div key={index} className="profile">
                <div className="details">
                    <p>ID: </p> { profile.ID}
                </div>
                <div className="details">
                    <p>USERNAME: </p> {profile.USERNAME}
                </div>
                <div className="details">
                    <p>EMAIL: </p> {profile.EMAIL}
                </div>
                <div className="details">
                    <p>MOVIENAME:</p>  {profile.MOVIENAME}
                </div>
                <div className="details">
                    <p>SONGNAME: </p> {profile.SONGNAME}
                </div>
                <div className="details">
                    <p>SONGLINK: </p> {profile.SONGLINK}
                </div>
                <div className="details">
                    <p>LYRICSLINK: </p>  {profile.LYRICSLINK}
                </div>
                <div className="details">
                    <p>ARTIST:  </p> {profile.ARTIST}
                </div>                        
            </div>
        ))}
        </>
    )
}

export default Hub;
