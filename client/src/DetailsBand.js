import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './Context/user';

function DetailsBand() {
  const { id } = useParams();
  const { bands } = useContext(UserContext);

  const band = bands.find((b) => b.id === parseInt(id, 10));
  if (!band) {
    return <div>Band not found</div>;
  } else {
    return (
      <div>
        <h1>{band.band_name}</h1>
        <img src={band.band_img_url} alt={band.band_name} />
        <p>{band.genre}</p>

        {/* Check if events exist in the band object */}
        {band.events && band.events.length > 0 ? (
          <div>
            <h2>Events:</h2>
            {band.events.map((event) => (
              <div key={event.id}>
                {event.event_name} at {event.hosting_venue}
                <br/>
                <Link to={`/venues/${event.hosting_venue_id}`}>Check Out Venue</Link>
              </div>
             
            ))}
          </div>
        ) : (
          <p>Events TBA</p>
        )}

        
      </div>
    );
  }
}

export default DetailsBand;