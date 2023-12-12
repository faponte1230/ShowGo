import React from 'react'
import { useContext } from "react";
import { UserContext } from "./Context/user";

function BandsPage() {
    const { bands, loggedIn} = useContext(UserContext)

  if (loggedIn) {
        
        //const userArr = user.arcades
        //console.log(userArr)
    
        
        //console.log(showRevs)

        
  return(
    <div>
      <h2>BandsPage</h2>
      {bands ? bands.map((b) => <li key={b.id} id={b.id}>{b.band_name}</li>) : null}       
    </div>
  )
  } else { 
    return (
    <div>
      <h1> Welcome to ShowGO!</h1>
      <p> please login or signup to use features</p>
    </div>
    )
  }
}

export default BandsPage