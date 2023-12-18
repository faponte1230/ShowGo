import {React, useState} from "react";
import { useContext } from "react";
import { UserContext } from "./Context/user";
import { useNavigate } from "react-router-dom";



//make addVenue in context
function AdminVenueForm() {
    const [venueName, setVenueName] = useState("")
    const [venueImgUrl, setVenueImgUrl] = useState("")
    const [location, setLocation] = useState('')
    const [errorsList, setErrorsList] = useState([])
    
    const nav = useNavigate()
    const { addVenue } = useContext(UserContext)

    function handleVenueSubmit(e){
        e.preventDefault()
            const venueData = {
            venue_name: venueName,
            venue_img_url: venueImgUrl,
            location: location
            };
            fetch("/venues", {
                 method: "POST",
                 headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(venueData)
             })
             .then((res) => {
                if (res.ok){
                    res.json().then((venueResData) => {
                        addVenue(venueResData)
                        nav('/venues')
                    })
                } else {
                    res.json().then((err) => {
                        setErrorsList(err.errors)
                        console.log(err)
                        console.log(errorsList)
                    })
                }
            })


        
    }


  return (
    <div>
        <div>
            <form onSubmit={handleVenueSubmit}>
            <h4> Add Venue </h4>
            <label> Venue Name </label>
            <input type= "text" id= "venue_name" value={venueName} onChange={(e) => setVenueName(e.target.value)} placeholder="Venue Name"/>
            <label> Venue Image </label>
            <input type= "text" id="venue_img_url" value={venueImgUrl} onChange={(e) => setVenueImgUrl(e.target.value)} placeholder="URL for Venue"/>
            <label> Location </label>
            <input type= "text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location"/>
            <button type="submit"> Add Venue </button>
            </form>
    
            {errorsList ? errorsList.map((e) => (<ul key={e} style={{color: "red"}}>{e}</ul>)) : null}

        </div>
    </div>
  )
}

export default AdminVenueForm