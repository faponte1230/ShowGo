import { useState, useContext } from "react";
import React from "react";
import { UserContext } from "./Context/user";

function AdminUpdateEventForm({ eventName, event }) {
  const [newName, setNewName] = useState(eventName);
  const [errorsList, setErrorsList] = useState([]);
  const { events, setEvents } = useContext(UserContext);

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
            const updatedEvents = events.map((ev) => {
              if (ev.id === updateData.id) {
                return updateData;
              } else {
                return ev;
              }
            });

            setEvents(updatedEvents);
          });
        } else {
          res.json().then((err) => {
            setErrorsList([err.error]);
            console.log(err);
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