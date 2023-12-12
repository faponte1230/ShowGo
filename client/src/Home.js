import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context/user'
import VenueCard from './VenueCard'
import BandCard from './BandCard'
function Home() {

  const {venues, bands, loggedIn} = useContext(UserContext)

  // Function to randomly sample elements from an array
  const sampleArray = (array, size) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  };

  if(!loggedIn){
    return (
      <div>
        <h1>Welcome to ShowGO!</h1>
        <p>Please login or signup to use features</p>
      </div>
    )
  } else {
    // Sample 3 venues and bands
    const sampledVenues = sampleArray(venues, 3);
    const sampledBands = sampleArray(bands, 3);


    return(
      <div>
        <h2> Featured Venues</h2>
        <div className="venues-sample-container">
        {sampledVenues.map((venue) => (<VenueCard key={venue.id} venue={venue} />))}
        </div>
        <br/>
        <h4> Featured Bands</h4>
        <div className="bands-sample-container">
        {sampledBands.map((band) => (<BandCard key={band.id} band={band}/>))}
        </div>
        <br/>
      </div>
    )
  }
}

export default Home
