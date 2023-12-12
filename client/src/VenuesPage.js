import React, { useContext } from 'react';
import { UserContext } from './Context/user';
import VenueCard from './VenueCard';

function VenuesPage() {
  const { venues, loggedIn } = useContext(UserContext);

  if (!loggedIn) {
    return (
    <div>
      <h1>Welcome to ShowGO!</h1>
      <p>Please login or signup to use features</p>
    </div>
    
    );
  } else {
    return (

    <div>  
      <h2>Venues</h2>
      <div className="venues-container">
      {venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
      <br/>

    </div>
    );
  }
}

export default VenuesPage;
