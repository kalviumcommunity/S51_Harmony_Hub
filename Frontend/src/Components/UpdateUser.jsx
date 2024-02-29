import React from "react";

function UpdateUser () {
    return(
        <div>
            <div>
                <form>
                    <h2>Update User</h2>
                    <div className="div1">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="details"/>
                    </div>
                    <div className="div2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter Email" className="details" />
                    </div>
                    <div className="div3">
                        <label htmlFor="">MovieName</label>
                        <input type="text" placeholder="Enter MovieName" className="details" />
                    </div>
                    <div className="div4">
                        <label htmlFor="">SongName</label>
                        <input type="text" placeholder="Enter SongName" className="details" />
                    </div>
                    <div className="div5">
                        <label htmlFor="">SongLink</label>
                        <input type="text" placeholder="Enter SongLink" className="details" />
                    </div>
                    <div className="div6">
                        <label htmlFor="">LyricsLink</label>
                        <input type="text" placeholder="Enter LyricsLink" className="details" />
                    </div>
                    <div className="div7">
                        <label htmlFor="">Artist</label>
                        <input type="text" placeholder="Enter Artist" className="details" />
                    </div>
                    <button className="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;