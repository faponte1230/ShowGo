import React from 'react';
import { Link } from 'react-router-dom';

function VenueCard({ venue }) {

  return (
    <>
      <div className="venue-card">

        <img
          src={venue.venue_img_url}
          alt={venue.venue_name}
          style={{ width: '150px', height: '150px' }} />
        <h3>{venue.venue_name}</h3>
        <Link to={`/venues/${venue.id}`}>Check Out Venue</Link>
      </div>
      <br />
    </>
  );
}

export default VenueCard;