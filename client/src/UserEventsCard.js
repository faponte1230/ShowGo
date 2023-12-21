import React from 'react'
import { Link } from 'react-router-dom'

function UserEventsCard({event}) {
  return (
    <div className='user-events-container-inner'>
        <div className='indi-container'>
          <h4>{event.event_name}</h4>
          
          <p>{event.band.band_name} at {event.venue.venue_name}</p> 
          <Link to={`/venues/${event.venue.id}`}>Check Out Venue</Link>
        </div>
    </div>
  )
}

export default UserEventsCard