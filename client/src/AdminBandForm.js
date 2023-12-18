import {React, useState} from "react";
import { useContext } from "react";
import { UserContext } from "./Context/user";
import { useNavigate } from "react-router-dom";

function AdminBandForm() {
    const [bandName, setBandName] = useState("")
    const [bandImgUrl, setbandImgUrl] = useState("")
    const [genre, setGenre] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const nav = useNavigate()
    
    const { addBand } = useContext(UserContext)

    function handleBandSubmit(e){
        e.preventDefault()
            const bandData = {
            band_name: bandName,
            band_img_url: bandImgUrl,
            genre: genre
            };
            fetch("/bands", {
                 method: "POST",
                 headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bandData)
             })
             .then((res) => {
                if (res.ok){
                    res.json().then((bandResData) => {
                        addBand(bandResData)
                        nav('/bands')
                    })
                } else {
                    res.json().then((err) => {
                        setErrorsList(err.errors)
                    })
                }
            })


        
    }


  return (
    <div>
        <div>
            <form onSubmit={handleBandSubmit}>
            <h4> Add Band </h4>
            <label> Band Name </label>
            <input type= "text" id= "band_name" value={bandName} onChange={(e) => setBandName(e.target.value)} placeholder="Band Name"/>
            <label> Band Image </label>
            <input type= "text" id="band_img_url" value={bandImgUrl} onChange={(e) => setbandImgUrl(e.target.value)} placeholder="URL for Band"/>
            <label> Genre </label>
            <input type= "text" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre"/>
            <button type="submit"> Add Band </button>
            </form>
    
            {errorsList ? errorsList.map((e) => (<ul key={e} style={{color: "red"}}>{e}</ul>)) : null}

        </div>
    </div>
  )
}

export default AdminBandForm