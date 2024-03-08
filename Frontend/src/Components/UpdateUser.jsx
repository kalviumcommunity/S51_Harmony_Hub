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
    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }
    const token = getCookie('token')
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
    },{headers:{authorization:`Bearer ${token}`}})
    .then((response)=>{ console.log(response.data);
    navigate('/')})
    .catch((error)=> console.error(error))
    }

    return(
        <div className="create">
            <div>
                <form onSubmit={Formsubmit}>
                    <h2 className="update-user">Update User</h2>
                    <div className="div8">
                        <label className="create1">Id</label>
                        <input type="text" placeholder="Enter Id" className="create2" onChange={(e)=>setId(e.target.value)}/>
                    </div>
                    <div className="div1">
                        <label className="create1">Name</label>
                        <input type="text" placeholder="Enter Name" className="create2" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="div2">
                        <label className="create1">Email</label>
                        <input type="text" placeholder="Enter Email" className="create2" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="div3">
                        <label className="create1">MovieName</label>
                        <input type="text" placeholder="Enter MovieName" className="create2" onChange={(e)=>setMovieName(e.target.value)}/>
                    </div>
                    <div className="div4">
                        <label className="create1">SongName</label>
                        <input type="text" placeholder="Enter SongName" className="create2" onChange={(e)=>setSongName(e.target.value)}/>
                    </div>
                    <div className="div5">
                        <label className="create1">SongLink</label>
                        <input type="text" placeholder="Enter SongLink" className="create2" onChange={(e)=>setSongLink(e.target.value)}/>
                    </div>
                    <div className="div6">
                        <label className="create1">LyricsLink</label>
                        <input type="text" placeholder="Enter LyricsLink" className="create2" onChange={(e)=>setLyricsLink(e.target.value)}/>
                    </div>
                    <div className="div7">
                        <label className="create1">Artist</label>
                        <input type="text" placeholder="Enter Artist" className="create2" onChange={(e)=>setArtist(e.target.value)}/>
                    </div>
                    <button type="submit" className="create-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;