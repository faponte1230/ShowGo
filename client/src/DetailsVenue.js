import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './Context/user';

function DetailsVenue() {
  const { id } = useParams();
  const { venues } = useContext(UserContext);

  const venue = venues.find((v) => v.id === parseInt(id, 10));

  if (!venue) {
    return <div>Venue not found</div>;
  } else {
    return (
      <div>{console.log(venue)}
        <h1>{venue.venue_name}</h1>
        <img src={venue.venue_img_url} alt={venue.venue_name} style={{ width: '150px', height: '150px' }} />
        <h3>{venue.location}</h3>

        {/* Check if events exist in the venue object */}
        {venue.events && venue.events.length > 0 ? (
          <div>
            <h2>Upcoming Events:</h2>
            {venue.events.map((event) => (
            <div key={event.hosting_venue_id}>
              <h3>{event.event_name}</h3>
              <h4>{`With Special Guest: ${event.band.band_name}`}</h4>
            </div>
            ))}
          </div>
        ) : (
          <p>TBA</p>
        )}

        <br />
        <Link to="/venues">Back to Venue List</Link>
      </div>
    );
  }
}

export default DetailsVenue;