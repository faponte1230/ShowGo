import React from 'react'
import { Link } from 'react-router-dom'

function DetailsEvent({event}) {
  console.log("EVENT:",event)
  return (
    <div>
      <div>
        <div className='event-details-container'>
          {event.event_name} at {event.venue.venue_name}
          <br/>
          <Link to={`/venues/${event.venue.id}`}>Check Out Venue</Link>
        </div>

      </div> 
    </div>
  )
}

export default DetailsEvent

