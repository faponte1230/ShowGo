import React from 'react'
import { Link } from 'react-router-dom'

function UserEventsCard({event}) {
  return (
    <div className='user-events-container-inner'>
        <div className='indi-container'>
            <p>{event.band.band_name} at {event.hosting_venue}</p> 
            <Link to={`/venues/${event.hosting_venue_id}`}>Check Out Venue</Link>
        </div>
    </div>
  )
}

export default UserEventsCard