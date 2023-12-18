import React from 'react'
import { useContext } from "react";
import { UserContext } from "./Context/user";
import BandCard from './BandCard';

function BandsPage() {
  const { bands, loggedIn} = useContext(UserContext)

  if (!loggedIn) {
        
  return(
    <div>
      
      <h1>Welcome to ShowGO!</h1>
      <p>Please login or signup to use features</p>
    </div>
  )
  } else { 
    return (
    <div>
      <h2>Bands</h2>
      <div className="bands-container">
      {bands.map((band) => (
        <BandCard key={band.id} band={band}/>
        ))}       
      </div>
    </div>
    )
  }
}

export default BandsPage