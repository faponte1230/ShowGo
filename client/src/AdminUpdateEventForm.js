import { useState, useContext } from "react";
import React from "react";
import { UserContext } from "./Context/user";

function AdminUpdateEventForm({ toggleForm, eventName, event }) {
  const [newName, setNewName] = useState(eventName);
  const [errorsList, setErrorsList] = useState([]);
  const { venues, setVenues } = useContext(UserContext);

  function handleEventUpdate(eventObj) {
    const updatedVenues = venues.map((ven) => {
      if (ven.id === eventObj.hosting_venue_id) {
        const updatedEvents = ven.events.map((ev) =>
          ev.id === eventObj.id ? { ...ev, event_name: eventObj.event_name } : ev
        );
        return { ...ven, events: updatedEvents };
      } else {
        return ven;
      }
    });
  
    setVenues(updatedVenues);
  }
  

  function handleSubmit(e) {
    e.preventDefault();
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
            });
        } else {
          res.json().then((err) => {
            setErrorsList([err.error]);
          });
        }
      });
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
  );
}

export default AdminUpdateEventForm;


// <AdminUpdateEventForm eventName={event.event_name} event={event}/> */}