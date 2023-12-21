import React from 'react'
import { useContext } from "react";
import { UserContext } from "./Context/user";
import EventCard from './EventCard';
function EventsPage() {
    const { events, loggedIn} = useContext(UserContext)

  if (!loggedIn) {
        
  return(
    <div>
      
      <h1>Welcome to ShowGO!</h1>
      <p>Please login or signup to use features</p>
    </div>
  )
  } else { 

    const eventsMap = events.map((event) => (<EventCard key={event.id} event={event} />))

    return (
    <div>
      <h2>EventsPage</h2>
      <div className="venues-container">
      {eventsMap}       
      </div>
    </div>
    )
  }
}

export default EventsPage