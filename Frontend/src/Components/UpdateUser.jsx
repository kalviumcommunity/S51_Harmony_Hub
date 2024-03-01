import React,{useState} from "react";
import axios from "axios";
import './Hub.css'
import { useNavigate } from "react-router-dom";

function UpdateUser () {
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [moviename,setMovieName]=useState("")
    const [songname,setSongName]=useState("")
    const [songlink,setSongLink]=useState("")
    const [lyricslink,setLyricsLink]=useState("")
    const [artist,setArtist]=useState("")
    const navigate=useNavigate()
    const Formsubmit=(e)=>{

        e.preventDefault();
        axios.patch(`https://s51-harmony-hub.onrender.com/updateharmonyhub/${id}`,{
        ID:id,
        USERNAME:name,
        EMAIL:email,
        MOVIENAME:moviename,
        SONGNAME:songname,
        SONGLINK:songlink,
        LYRICSLINK:lyricslink,
        ARTIST:artist
    })
    .then((response)=>{ console.log(response.data);
    navigate('/')})
    .catch((error)=> console.error(error))
    }

    return(
        <div className="create">
            <div>
                <form onSubmit={Formsubmit}>
                    <h2>Update User</h2>
                    <div className="div8">
                        <label>Id</label>
                        <input type="text" placeholder="Enter Id" className="details" onChange={(e)=>setId(e.target.value)}/>
                    </div>
                    <div className="div1">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Name" className="details" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="div2">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email" className="details" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="div3">
                        <label>MovieName</label>
                        <input type="text" placeholder="Enter MovieName" className="details" onChange={(e)=>setMovieName(e.target.value)}/>
                    </div>
                    <div className="div4">
                        <label>SongName</label>
                        <input type="text" placeholder="Enter SongName" className="details" onChange={(e)=>setSongName(e.target.value)}/>
                    </div>
                    <div className="div5">
                        <label>SongLink</label>
                        <input type="text" placeholder="Enter SongLink" className="details" onChange={(e)=>setSongLink(e.target.value)}/>
                    </div>
                    <div className="div6">
                        <label>LyricsLink</label>
                        <input type="text" placeholder="Enter LyricsLink" className="details" onChange={(e)=>setLyricsLink(e.target.value)}/>
                    </div>
                    <div className="div7">
                        <label>Artist</label>
                        <input type="text" placeholder="Enter Artist" className="details" onChange={(e)=>setArtist(e.target.value)}/>
                    </div>
                    <button type="submit" className="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;