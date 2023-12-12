import React, { useContext } from 'react';
import { UserContext } from './Context/user';

function Home() {
  const { venues, loggedIn } = useContext(UserContext);

  if (loggedIn) {
    return (
      <div>
        <h2>Venues</h2>
        <ul>
          {Array.isArray(venues) ? (
            venues.map((v) => <li key={v.id} id={v.id}>{v.venue_name}</li>)
          ) : (
            <li>No venues available</li>
          )}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome to ShowGO!</h1>
        <p>Please login or signup to use features</p>
      </div>
    );
  }
}

export default Home;
