import {React, useState} from "react";
import { useContext } from "react";
import { UserContext } from "./Context/user";



function AdminEventForm({venue}) {
    const [eventName, setEventName] = useState("")
    const [selectedOption, setSelectedOption] = useState('');
    const [errorsList, setErrorsList] = useState([])
    const { bands , venues , setVenues} = useContext(UserContext)

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    function handleVenueEventAdd(venueEventData){
       
        const updatedVenues = venues.map((ven) => ven.id === venueEventData.hosting_venue_id ? { ...ven, events: [ ...ven.events, venueEventData] } : ven
      );
      
      setVenues(updatedVenues);
    }


    function handleVenueSubmit(e){
        e.preventDefault()
            const eventData = {
            event_name: eventName,
            venue_id: venue.id, 
            band_id: parseInt(selectedOption, 10)
            };
            fetch("/events", {
                 method: "POST",
                 headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(eventData)
             })
             .then((res) => {
                if (res.ok){
                    
                    res.json().then((eventResData) => {
                        handleVenueEventAdd(eventResData)
                        setErrorsList([])
                        setSelectedOption('')
                        setEventName('')
                    })
                } else {
                    res.json().then((err) => {
                        setErrorsList(err.errors)
                    })
                }
        }   )


        
    }


  return (
    <div>
        <div>
            <form onSubmit={handleVenueSubmit}>
            <h4> Add Event </h4>
            <label> Event Name </label>
            <input type= "text" id= "event_name" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Event Name"/>
            
            <label> Performing </label>
            {/*add options  of bands*/}
            <select id="selectOption" value={selectedOption} onChange={handleSelectChange}>
            <option value="" disabled>Select an option</option>
            {bands.map((b) => (<option key={b.id} value={b.id}>{b.band_name}</option>))}
            </select>
            <br/>
            <button type="submit"> Add Event </button>
            </form>

            {errorsList ? errorsList.map((e) => (<ul key={e} style={{color: "red"}}>{e}</ul>)) : null}

        </div>
    </div>
  )
}

export default AdminEventForm
