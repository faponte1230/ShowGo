import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context/user'
import { Link } from 'react-router-dom'
function MyProfile() {
    const { user, loggedIn } = useContext(UserContext)

    if (!loggedIn) {

        return( 
            <div>
                <h1> Welcome to ShowGO!</h1>
                <p> please login or signup to use features</p>
               
                <br/>
            </div>
        );
    } else {
        return(

            <div>
                <h2> Welcome {user.username}! </h2>
                <p> Click on the links above and view bands & upcoming shows! </p>
                    
                <h4>Below are your Current Attending Events!</h4>
                {user.attendees && user.attendees.length > 0 ? (user.attendees.map((attendee) => (
                    <div key={attendee.id}>
                        <p>{attendee.attending_band_name} at {attendee.attending_venue.location}</p> 
                        <Link to={`/venues/${attendee.attending_venue.id}`}>Check Out Venue</Link>
                    </div>
                    ))) : (<h5>Not Attending Events</h5>)}
                    
                <h4>Below are your Favorite Bands!</h4>
                {user.favorite_bands && user.favorite_bands.length > 0 ? (user.favorite_bands.map((band) => (
                    <div key={band.id}>
                        <p>{band.favBand_name}</p>
                        <Link to={`/bands/${band.fav_band_id}`}>Check Out Band</Link>
                    </div>))) : (<h5>No Favorite Bands</h5>)}
            </div>
        )
    }
}

export default MyProfile