import React, {useEffect, useState} from "react"
import "./Hub.css"
import axios from 'axios'
import {Link} from "react-router-dom"
import Welcome from "./Sub-component/Welcome"

function Hub (){
    const[data,setData]=useState([])
    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }
    const token = getCookie('token')
    useEffect(()=>{
        axios.get('https://s51-harmony-hub.onrender.com/getallharmonyhub',{headers:{authorization:`Bearer ${token}`}})
        .then((response)=> {setData(response.data);
        console.log(response.data)})
        .catch(error =>console.error(error))
    }, []);

    const deleteData=(id)=>{
        axios.delete(`https://s51-harmony-hub.onrender.com/deleteharmonyhub/${id}`,{headers:{authorization:`Bearer ${token}`}})
        .then((response)=>{ console.log(response.data);
            window.location.reload()})
        .catch((error)=> console.error(error))       
    }
    return (
        <>
        <h1 className="head">Profile</h1>
        <div className="container">
        <Welcome/>
        <Link to='/create'><button className="add">Add+</button></Link>
        {(data.length > 1) ?
<div>
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

                <div className="button">
                <Link to='/update'><button className="update">Update</button></Link>
                <button className="delete" onClick={(e)=>deleteData(profile.ID)}>Delete</button>
                </div>
                               
            </div>
        ))}</div>:<div id='Body-content'>
        <div id="login">
        <h1>Please Login To Continue</h1>
        </div>
      </div>}
        </div>
        
        </>
    )
}
export default Hub;
