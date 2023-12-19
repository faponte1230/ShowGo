import React, { useContext } from 'react';
import { UserContext } from './Context/user';
import UserEventsCard from './UserEventsCard';
import UserFavBandsCard from './UserFavBandsCard';

function MyProfile() {
  const { user, loggedIn, avatar } = useContext(UserContext);

  // Check if the user is not logged in
  if (!loggedIn) {
    return (
      <div>
        <h1>Welcome to ShowGO!</h1>
        <p>Please login or signup to use features</p>
        <br />
      </div>
    );
  } else {

    return (
      <div>
        <p>Click on the links above to view bands & upcoming shows!</p>
        <div className='user-profile-container'>
          <h2>Welcome {user.username}!</h2>

          <img src={avatar}
            alt={'user'}
            style={{ width: '150px', height: '150px' }}
          />

        </div>
        <h4 className='user-events-container'>Below are your Current Attending Events!</h4>
        {user.events && user.events.length > 0 ? (
          user.events.map((event) => <UserEventsCard key={event.id} id={event.id} event={event} />)
        ) : (
          <h5>Not Attending Events</h5>
        )}

        <h4 className='favorite-bands-container'>Below are your Favorite Bands!</h4>
        {user.favorite_bands && user.favorite_bands.length > 0 ? (
          user.favorite_bands.map((band) => (
            <UserFavBandsCard key={band.id} id={band.id} band={band} />
          ))
        ) : (
          <h5>No Favorite Bands</h5>
        )}
      </div>
    );
  }
}

export default MyProfile;
