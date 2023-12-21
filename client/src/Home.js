import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from './Context/user'
import VenueCard from './VenueCard'
import BandCard from './BandCard'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import AdminDashboard from './AdminDashboard'

function Home() {
  const [ btn, setBtn ] = useState(false)
  const {venues, bands, user, loggedIn} = useContext(UserContext)


  if(!loggedIn){
    
    const toggleForm = () => {
      setBtn(!btn);
    };

    return (
      <div className='home'>
        
        <br/>
        <img src={'https://miro.medium.com/v2/resize:fit:2400/1*0bzg8mvGWxlTK7V0krpq2w.jpeg'}
        alt={'ShowGO'}
        style={{ width: '250px', height: '250px' }}
        />
        <br/>
        <br/>
        <br/>
        <div>
          { !btn ? <LoginForm /> : <SignupForm />}
          { !btn ? <h5> New User? </h5> : null}
           
          <button onClick={toggleForm}>{ btn ? 'Login' : 'Signup'}</button>
        </div>
      </div>
    )
  } else {
    if (user.is_admin) {
      return <AdminDashboard />;
    }

  // Function to randomly sample elements from an array
  const sampleArray = (array, size) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  };

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
        <h2> Featured Bands</h2>
        <div className="bands-sample-container">
        {sampledBands.map((band) => (<BandCard key={band.id} band={band}/>))}
        </div>
        <br/>
      </div>
    )
  }
}

export default Home
