// import React, { useContext, useEffect, useState} from 'react';
// import  { UserContext } from './Context/user';
// //import { useNavigate } from 'react-router-dom';



// function VenueEvent({event}) {
//     const [errors, setErrors]  = useState([])
//     const {user, setUser, events, setEvents} = useContext(UserContext)
//     const isAttending = user.events.some((ev) => ev.id === event.id);
//     const userAttendee = event.attendees.find((attendee) => attendee.user_id === user.id);
//     //const nav = useNavigate()
    
//     useEffect(() => {
//       // Your code to run after the component renders or when specific dependencies change
    
//       // For example, you might want to re-fetch data or perform some action
//       // when events or user state changes
//       console.log(user)
//       // console.log(event)
//       // console.log(event.attendees)
      
//     }, [user]); 
//     console.log(event.attendees)


    
//     function updateEventsWithAttendee(attendeeObject) {
//       const updatedEvents = events.map((ev) =>
//         ev.id === event.id ? { ...ev, attendees: [...ev.attendees, attendeeObject] } : ev
//       );
//       setEvents(updatedEvents);
//     }
    

//     function handleAttend(e){
//       e.preventDefault()
//       fetch('/attendees', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           event_id: event.id,
//           user_id: user.id
//         })
//       })
//         .then((res) => {
//           if (res.ok) {
//               // Update the user's state with the updated events
//               res.json().then((attendeeObjData) => {
//               updateEventsWithAttendee(attendeeObjData)
//               //setEvents((prevEvents) => prevEvents.map((ev) => ev.id === event.id ? { ...ev, attendees: [...ev.attendees, attendeeObjData] } : ev))

//               setUser({...user, events:[...user.events, event]});
//               //alert(`You're Going To See ${event.band.band_name}!`);
//               })
//           } else {
//             res.json().then((err) => {
//               setErrors([err.error]);
//               //alert(errors)
//             });
//           }
//         //nav('/myprofile')
//       })
        
//   }

//   function handleDeleteUpdate(eventDEL){
//     setUser({...user, events: user.events.filter((ev) => ev.id !== eventDEL.id)})
//       // Remove the user's ID from the attendees list of the specific event
//   const updatedEvents = events.map((ev) =>
//   ev.id === eventDEL.id
//     ? { ...ev, attendees: ev.attendees.filter((attendee) => attendee.user_id !== user.id) }
//     : ev
// );

// // Update only the events state
// setEvents(updatedEvents);
//   }

//   function handleUnattend(e) {
//     e.preventDefault();
  
//     fetch(`/attendees/${userAttendee.id}`, {
//       method: 'DELETE',
//     })
//       .then((res) => {
//         if (res.ok) { 
//           handleDeleteUpdate(event)
//           //alert(`You've Unattended ${event.band.band_name}'s Event`) 
//         } else {
//           res.json().then((err) => {
//             setErrors([err.error]);
//           });
//         }
//     } )
      
//   }
    

    
//   return (
//     <div>
//         <div className='event-details-container'>
//             {console.log(event)}
//             <h3>{event.event_name}</h3>
//             <h4>{`With Special Guest: ${event.band.band_name}`}</h4>
//             {isAttending ? (
//               <button onClick={(e) => handleUnattend(e)}>Unattend</button>)
//               : (<button onClick={(e) => handleAttend(e)}>Attend</button>)
//             }
//         </div>
//         {errors ? errors.map((e) => (<ul key={e} style={{color: "red"}}>{e}</ul>)) : null}
//     </div>
//   )
// }

// export default VenueEvent









// import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from './Context/user';

// function VenueEvent({ event }) {
//   const [errors, setErrors] = useState([]);
//   const { user, setUser, events, setEvents } = useContext(UserContext);
//   const isAttending = user.events.some((ev) => ev.id === event.id);
//   const userAttendee = event.attendees.find((attendee) => attendee.user_id === user.id);

//   useEffect(() => {
//     console.log(user);
//     console.log(event);
//     console.log(event.attendees);

//     // Perform actions that depend on the updated state here

//   }, [user, event, events, setEvents]);
//   console.log(event.attendees);

//   function handleAttend(e) {
//     e.preventDefault();
//     fetch('/attendees', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         event_id: event.id,
//         user_id: user.id,
//       }),
//     })
//       .then((res) => {
//         if (res.ok) {
//           // Update the user's state with the updated events
//           res.json().then((attendeeObjData) => {
//             const updatedEvents = events.map((ev) =>
//               ev.id === event.id ? { ...ev, attendees: [...ev.attendees, attendeeObjData] } : ev
//             );
//             setEvents(updatedEvents);

//             setUser({ ...user, events: [...user.events, event] });
//             // alert(`You're Going To See ${event.band.band_name}!`);
//           });
//         } else {
//           res.json().then((err) => {
//             setErrors([err.error]);
//             // alert(errors)
//           });
//         }
//         // nav('/myprofile')
//       });
//   }

//   function handleDeleteUpdate(eventDEL) {
//     setUser({ ...user, events: user.events.filter((ev) => ev.id !== eventDEL.id) });
//     // Remove the user's ID from the attendees list of the specific event
//     const updatedEvents = events.map((ev) =>
//       ev.id === eventDEL.id
//         ? { ...ev, attendees: ev.attendees.filter((attendee) => attendee.user_id !== user.id) }
//         : ev
//     );

//     // Update only the events state
//     setEvents(updatedEvents);
//   }

//   function handleUnattend(e) {
//     e.preventDefault();

//     fetch(`/attendees/${userAttendee.id}`, {
//       method: 'DELETE',
//     }).then((res) => {
//       if (res.ok) {
//         handleDeleteUpdate(event);
//         // alert(`You've Unattended ${event.band.band_name}'s Event`)
//       } else {
//         res.json().then((err) => {
//           setErrors([err.error]);
//         });
//       }
//     });
//   }

//   return (
//     <div>
//       <div className='event-details-container'>
//         {console.log(event)}
//         <h3>{event.event_name}</h3>
//         <h4>{`With Special Guest: ${event.band.band_name}`}</h4>
//         {isAttending ? (
//           <button onClick={(e) => handleUnattend(e)}>Unattend</button>
//         ) : (
//           <button onClick={(e) => handleAttend(e)}>Attend</button>
//         )}
//       </div>
//       {errors ? errors.map((e) => <ul key={e} style={{ color: 'red' }}>{e}</ul>) : null}
//     </div>
//   );
// }

// export default VenueEvent;









import React, { useContext, useState } from 'react';
import { UserContext } from './Context/user';

function VenueEvent({ venue, event, setVenues }) {
  const [errors, setErrors] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const isAttending = user.events.some((ev) => ev.id === event.id);

  const userAttendee = user.events.find((ev) => ev.id === event.id)?.attendees.find((attendee) => attendee.user_id === user.id);


  // useEffect(() => {
  //   console.log('User:', user);
  //   console.log('Event:', event);
  //   console.log('Event Attendees:', event.attendees);

     
  // }, [user, event]);

  function updateEventsWithAttendee(attendeeObject) {
    const updatedEvents = venue.events.map((ev) =>
      ev.id === event.id ? { ...ev, attendees: [...ev.attendees, attendeeObject] } : ev
    );
    setVenues(updatedEvents);
  }

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
            setUser({ ...user, events: [...user.events, event] });
          });
        } else {
          res.json().then((err) => {
            setErrors([err.error]);
          });
        }
      });
  }

  function handleDeleteUpdate(eventDEL) {
    setUser({ ...user, events: user.events.filter((ev) => ev.id !== eventDEL.id) });
    const updatedEvents = venue.events.map((ev) =>
      ev.id === eventDEL.id
        ? { ...ev, attendees: ev.attendees.filter((attendee) => attendee.user_id !== user.id) }
        : ev
    );
    setVenues(updatedEvents);
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

  return (
    <div>
      <div className='event-details-container'>
        {console.log('Current Event:', event)}
        <h3>{event.event_name}</h3>
        <h4>{`With Special Guest: ${event.band.band_name}`}</h4>
        {isAttending ? (
          <button onClick={(e) => handleUnattend(e)}>Unattend</button>
        ) : (
          <button onClick={(e) => handleAttend(e)}>Attend</button>
        )}
      </div>
      {errors ? errors.map((e) => <ul key={e} style={{ color: 'red' }}>{e}</ul>) : null}
    </div>
  );
}

export default VenueEvent;