import React, { useContext, useState } from 'react';
import { UserContext } from './Context/user';
import AdminUpdateEventForm from './AdminUpdateEventForm';

function VenueEvent({ event }) {
  const [errors, setErrors] = useState([]);
  const [ btn , setBtn ] = useState(false)
  const { user, setUser , events , setEvents, venues, setVenues} = useContext(UserContext);
  const isAttending = user.events.some((ev) => ev.id === event.id);
  const userAttendee = user.events.find((ev) => ev.id === event.id)?.attendees.find((attendee) => attendee.user_id === user.id);


  //POST/DELETE for ATTENDEES


  //STATE UPDATE -WITH POST
  function updateEventsWithAttendee(attendeeObject) {
    const updatedEvents = events.map((ev) =>
      ev.id === attendeeObject.event.id ? { ...ev, attendees: [...ev.attendees, attendeeObject.event.attendees] } : ev
    );
    setEvents(updatedEvents);
  }

  const toggleForm = () => {setBtn(!btn);};
  
  
  //POST FETCH
  function handleAttend(e) {
    e.preventDefault();
    fetch('/attendees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_id: event.id,
        user_id: user.id,
      }),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((attendeeObjData) => {
            updateEventsWithAttendee(attendeeObjData);
            setUser({ ...user, events: [...user.events, attendeeObjData.event] });
            alert(`You're Going To See ${attendeeObjData.event.band.band_name} !!!`)
          });
        } else {
          res.json().then((err) => {
            setErrors([err.error]);
          });
        }
      });
  }

  //STATE UPDATE -DELETE 
  function handleDeleteAttendeeUpdate(eventDEL) {
    setUser({ ...user, events: user.events.filter((ev) => ev.id !== eventDEL.id) });
    const updatedEvents = events.map((ev) =>
      ev.id === eventDEL.id
        ? { ...ev, attendees: ev.attendees.filter((attendee) => attendee.user_id !== userAttendee.id) }
        : ev
    );
    setEvents(updatedEvents);
  }


  //DELETE FETCH
  function handleUnattend(e) {
    e.preventDefault();
    fetch(`/attendees/${userAttendee.id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (res.ok) {
        handleDeleteAttendeeUpdate(event);
        alert(`No Longer Attending The ${event.band.band_name} Show !!!`)
      } else {
        res.json().then((err) => {
          setErrors([err.error]);
        });
      }
    });
  }
 //DELETE/UPDATE FOR EVENT

  //UPDATE STATE -DELETE
  function handleDeleteEvent(eventData){
    const updateVenues = venues.map((ven) => ven.id === eventData.hosting_venue_id ? {...ven, events: ven.events.filter((ev) => ev.id !== eventData.id) } : ven)
    setVenues(updateVenues)
  }
  //FETCH -DELETE
  function handleEventDelete(e){
    e.preventDefault()
    fetch(`/events/${event.id}`, {
      method: 'DELETE', 
    }).then((res) => {
      if (res.ok) {
        handleDeleteEvent(event);
        alert(`YOU DELETED The ${event.band.band_name} Show !!!`)
      } else {
        res.json().then((err) => {
          setErrors([err.error]);
        });
      }
    }) 
  }
  
  
  return (
    <div>
      <div className='event-details-container'>
        <h3>{event.event_name}</h3>
        <h4>{`With Special Guest: ${event.band.band_name}`}</h4>
        {!isAttending ? (
          <button onClick={(e) => handleAttend(e)}> Attend </button>
        ) : (
          <button onClick={(e) => handleUnattend(e)}> Unattend </button>
        )}
        {user.is_admin ? (
          <div>
            <button onClick={toggleForm}>{btn ? 'Cancel' : 'Update'}</button>
            <button onClick={handleEventDelete}> Delete </button>
          </div>
        ) : null}
        {btn ? <AdminUpdateEventForm toggleForm={toggleForm} eventName={event.event_name} event={event}/> : null }
      </div>
      
      {errors ? errors.map((e) => <ul key={e} style={{ color: 'red' }}>{e}</ul>) : null}
    </div>
  );
}

export default VenueEvent;