import React, {useEffect, useState} from "react"
import "./Hub.css"
import axios from 'axios'
import {Link} from "react-router-dom"
import Welcome from "./Sub-component/Welcome"

function Hub (){
    const[data,setData]=useState([])
    const [filter,setFilter] = useState("All")
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
    const filteredData = data.filter((item) => {
        if (filter === "All") {
          return item;
        } else if (item.Created_by && item.Created_by.includes(filter)) {
          return item;
        }
      });
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
        <p className="created"> Created By : </p> 
            <select className="created" name="Created_by" id="Created_by" onChange={(e)=>{setFilter(e.target.value)}}>
              <option value="All">All</option>
              <option value="Raghavendar">Raghavendar</option>
              <option value="Goutham">Goutham</option>
              <option value="Esther">Esther</option>
              <option value="Nithya">Nithya</option>
            </select>
        {(data.length > 1) ?
<div className="profile">
        {filteredData.map((profile,index)=>(
            <div key={index} >
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
                <div className="details">
                    <p>Created_by:  </p> {profile.Created_by}
                </div>
                <div className="details">
                <Link to={`/update/${profile.ID}`} state={profile}><button id="update">Update</button></Link>
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
