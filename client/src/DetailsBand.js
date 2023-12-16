import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './Context/user';
import DetailsEvent from './DetailsEvent';

function DetailsBand() {
  const { id } = useParams()
  const [errors, setErrors]  = useState([])
  const { bands , user, setUser } = useContext(UserContext)
  const band = bands.find((b) => b.id === parseInt(id, 10))
  // const isFavorite = user.favorite_bands.some((ev) => ev.favorite_band_id.id === band.id);
  //let userFavBand = user.favorite_bands.find((ev) => ev.favorite_band_id.id === band.id)
 //FIX DELETE

  console.log(band)
  function handleFav(e) {
    e.preventDefault();
    fetch('/favorite_bands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorite_band: {
          band_id: band.id,
          user_id: user.id
        }
      })
    })
      .then((res) => {
        if (res.ok) {
          res.json().then(() => {
            setUser({ ...user, favorite_bands: [...user.favorite_bands, band] });
            //alert(`You're A Fan of ${band.band_name}!`);
          });
        } else {
          res.json().then((err) => {
            setErrors([err.error]);
            alert(errors);
          });
        }
      });
  }

  function handleDeleteUpdate(bandDEL) {
    setUser({ ...user, favorite_bands: user.favorite_bands.filter((ev) => ev.id !== bandDEL.id) });
  }
  
  function handleUnfav(e) {
    e.preventDefault();
    fetch(`/favorite_bands/${user.id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (res.ok) {
        handleDeleteUpdate(band);
      } else {
        res.json().then((err) => {
          setErrors([err.error]);
        });
      }
    });
  }
  
  if (!band) {
    return <div>Band not found</div>;
  } else {
    return (
    <div>
      <div className='bands-page-container'>
        <h1>{band.band_name}</h1>
        <br/>
        <img src={band.band_img_url} alt={band.band_name} />
        <br/>
        <p>{band.genre}</p>
        
          <button onClick={(e) => handleUnfav(e)}> Add To Favorites </button>
        
          <button onClick={(e) => handleFav(e)}> Remove From Favorites </button>
        
        {/* Check if events exist in the band object */}
        {band.events && band.events.length > 0 ? (
          <div>
            <h2>Upcoming Events:</h2>
            {band.events.map((event) => (
              <DetailsEvent key={event.id} event={event}/>
            ))}
             <Link to="/bands"> Back to Bands</Link>
          </div>
        ) : (
          <div>
            <p>Events TBA</p>
            <Link to="/bands"> Back to Bands</Link>
          </div>
        )}

      </div>
      {errors ? errors.map((e) => (<ul key={e} style={{color: "red"}}>{e}</ul>)) : null}

    </div>
    )
  }
}

export default DetailsBand;

//import React, { useContext, useState} from 'react';
// import  { UserContext } from './Context/user';
// import { useNavigate } from 'react-router-dom';



// function VenueEvent({event}) {
//     const [errors, setErrors]  = useState([])
//     const {user, setUser} = useContext(UserContext)
//     const isAttending = user.events.some((ev) => ev.id === event.id);
//     const userAttendee = event.attendees.find((attendee) => attendee.user_id === user.id);
//     const nav = useNavigate()
    

//     console.log(event.attendees)

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
//             fetch('/me')
//             .then((res) => res.json())
//             .then((updatedUser) => {
//               // Update the user's state with the updated events
//               setUser(updatedUser);
//               alert(`You're Going To See ${event.band.band_name}!`);
//             });
//           } else {
//             res.json().then((err) => {
//               setErrors([err.error]);
//               alert(errors)
//             });
//           }
//         nav('/myprofile')
//       })
        
//   }

//   function handleDeleteUpdate(eventDEL){
//     setUser({...user, events: user.events.filter((ev) => ev.id !== eventDEL.id)})
//   }

//   function handleUnattend(e) {
//     e.preventDefault();
  
//     fetch(`/attendees/${userAttendee.id}`, {
//       method: 'DELETE',
//     })
//       .then((res) => {
//         if (res.ok) { 
//           handleDeleteUpdate(event)
//           alert(`You've Unattended ${event.band.band_name}'s Event`) 
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