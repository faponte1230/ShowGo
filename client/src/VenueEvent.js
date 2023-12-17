import React, { useContext, useState } from 'react';
import { UserContext } from './Context/user';
import AdminUpdateEventForm from './AdminUpdateEventForm';

function VenueEvent({ event }) {
  const [errors, setErrors] = useState([]);
  const [ btn , setBtn ] = useState(false)
  const { user, setUser , events , setEvents} = useContext(UserContext);
  const isAttending = user.events.some((ev) => ev.id === event.id);
  const userAttendee = user.events.find((ev) => ev.id === event.id)?.attendees.find((attendee) => attendee.user_id === user.id);




  function updateEventsWithAttendee(attendeeObject) {

    const updatedEvents = events.map((ev) =>
      ev.id === attendeeObject.event.id ? { ...ev, attendees: [...ev.attendees, attendeeObject.event.attendees] } : ev
    );
    setEvents(updatedEvents);
    //console.log(userAttendee)
    }

    const toggleForm = () => {
      setBtn(!btn);
    };

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
            console.log('Attendee Object Data:', attendeeObjData);
           
            updateEventsWithAttendee(attendeeObjData);
            setUser({ ...user, events: [...user.events, attendeeObjData.event] });
            
          });
        } else {
          res.json().then((err) => {
            setErrors([err.error]);
          });
        }

      });
      console.log(user)
      
  }

  function handleDeleteUpdate(eventDEL) {
    setUser({ ...user, events: user.events.filter((ev) => ev.id !== eventDEL.id) });
    const updatedEvents = events.map((ev) =>
      ev.id === eventDEL.id
        ? { ...ev, attendees: ev.attendees.filter((attendee) => attendee.user_id !== userAttendee.id) }
        : ev
    );
    setEvents(updatedEvents);
  }

  function handleUnattend(e) {
    e.preventDefault();
    fetch(`/attendees/${userAttendee.id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (res.ok) {
        handleDeleteUpdate(event);
      } else {
        res.json().then((err) => {
          setErrors([err.error]);
        });
      }
    });
  }

  function handleEventDelete(){
    console.log('im gonna delete')
  }

  return (
    <div>
      <div className='event-details-container'>
        {console.log('Current Event:', event)}
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
        {btn ? <AdminUpdateEventForm eventName={event.event_name} event={event}/> : null }
      </div>
      
      {errors ? errors.map((e) => <ul key={e} style={{ color: 'red' }}>{e}</ul>) : null}
    </div>
  );
}

export default VenueEvent;