import React from 'react'
import { Link } from 'react-router-dom'

function DetailsEvent({event}) {
  return (
    <div>
      <div>
      <div className='event-details-container'>
        {event.event_name} at {event.hosting_venue}
        <br/>
      <Link to={`/venues/${event.hosting_venue_id}`}>Check Out Venue</Link>
      </div>
      </div>
    </div>
  )
}

export default DetailsEvent