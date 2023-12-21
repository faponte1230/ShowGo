import { useState, useContext } from "react"
import React from "react"
import { UserContext } from "./Context/user"

function AdminUpdateEventForm({ toggleForm, eventName, event, isAttending }) {
  const [newName, setNewName] = useState(eventName)
  const [errorsList, setErrorsList] = useState([])
  const { venues, setVenues, bands, setBands, events, setEvents, user, setUser } = useContext(UserContext)

  function handleEventUpdate(eventObj) {
    //update venue
    const updatedVenues = venues.map(ven => ven.id === eventObj.venue.id ? { ...ven, events: ven.events.map(ev => (ev.id === eventObj.id ? { ...ev, event_name: eventObj.event_name } : ev)) } : ven)
    setVenues(updatedVenues)

    //update bands details page here
    const updatedBands = bands.map(bnd => bnd.id === eventObj.band.id ? { ...bnd, events: bnd.events.map(ev => (ev.id === eventObj.id ? { ...ev, event_name: eventObj.event_name } : ev)) } : bnd)
    setBands(updatedBands)
    
    //update events main page here
    const updatedEvents = events.map(eve => eve.id === eventObj.id ? { ...eve, event_name: eventObj.event_name } : eve) 
    setEvents(updatedEvents)

    //update user events if attending
    if (isAttending) {
      const updatedUserEvents = user.events.map(eve => eve.id === eventObj.id ? { ...eve, event_name: eventObj.event_name } : eve) 
      setUser({ ...user, events: updatedUserEvents })
    }
  }
  

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/events/${event.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        event_name: newName,
      }),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((updateData) => {
            handleEventUpdate(updateData)
            setNewName('')
            toggleForm()
            })
        } else {
          res.json().then((err) => {
            setErrorsList([err.error])
          })
        }
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Event Name"
        />
        <button type="submit"> Update </button>
      </form>
      {errorsList
        ? errorsList.map((e) => (
            <ul key={e} style={{ color: "red" }}>
              {e}
            </ul>
          ))
        : null}
    </div>
  )
}

export default AdminUpdateEventForm


// <AdminUpdateEventForm eventName={event.event_name} event={event}/> */}