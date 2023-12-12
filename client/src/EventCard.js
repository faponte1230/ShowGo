import React from 'react';
import { Link } from 'react-router-dom';
function EventCard({ event }) {

  return (
    <>
      <div className="venue-card">

        <h3>{event.event_name}</h3>
        <h4>{`With Headliner ${event.band.band_name}`}</h4>
        <h5>{`At The ${event.venue.venue_name}`}</h5>{console.log(event)}
        <Link to={`/venues/${event.venue.id}`}>Check Out Venue</Link>

      </div>
      <br />
    </>
  );
}

export default EventCard;

//<h4>{console.log(event.band.band_name)}</h4>