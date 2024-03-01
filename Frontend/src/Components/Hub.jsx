import React, {useEffect, useState} from "react"
import "./Hub.css"
import axios from 'axios'
import {Link} from "react-router-dom"

function Hub (){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://s51-harmony-hub.onrender.com/getallharmonyhub')
        .then((response)=> {setData(response.data);
        console.log(response.data)})
        .catch(error =>console.error(error))
    }, [])

    const deleteData=(id)=>{
        axios.delete(`https://s51-harmony-hub.onrender.com/deleteharmonyhub/${id}`,)
        .then((response)=>{ console.log(response.data);
            window.location.reload()})
        .catch((error)=> console.error(error)) 
              
    }

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
                <Link to='/update'><button>Update</button></Link>
                <button onClick={(e)=>deleteData(profile.ID)}>Delete</button>               
            </div>
        ))}
        </>
    )
}

export default Hub;
