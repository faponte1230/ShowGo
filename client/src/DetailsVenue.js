import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './Context/user';
import VenueEvent from './VenueEvent';
import  AdminEventForm from './AdminEventForm'

function DetailsVenue() {
  const { id } = useParams();
  const { venues, user } = useContext(UserContext);

  const venue = venues.find((v) => v.id === parseInt(id, 10));
  
  if (!venue) {
    return <div>Venue not found</div>;
  } else {
    
    return (
      <div className='venues-page-container'>
        <h1>{venue.venue_name}</h1>
        <br/>
        <img src={venue.venue_img_url} alt={venue.venue_name} style={{ width: '150px', height: '150px' }} />
        <h3>{venue.location}</h3>
        { user.is_admin? <AdminEventForm venue={venue}/> : null}
        {/* Check if events exist in the venue object */}
        {venue.events && venue.events.length > 0 ? (
          <div>
            <h2>Upcoming Events:</h2>
            {venue.events.map((event) => (
            <VenueEvent key={event.id} event={event}/>
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

