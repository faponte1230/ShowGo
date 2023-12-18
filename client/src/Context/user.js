import  React, {useEffect, useState } from 'react';

const UserContext = React.createContext();

function UserProvider( { children } ){
    const [ user, setUser ] = useState({})
    const [ bands, setBands ] = useState([])
    const [ venues, setVenues ] = useState([])
    const [ events, setEvents ] = useState([])
    const [ loggedIn, setLoggedIn ] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const userResponse = await fetch('/me');
            if (userResponse.ok) {
              const userData = await userResponse.json();
              setUser(userData);
              setLoggedIn(true);
    
              // Fetch other data after user data is successfully retrieved
              fetchBands();
              fetchEvents();
              fetchVenues();
            } else {
              const errorData = await userResponse.json();
              setLoggedIn(false);
              console.error(errorData);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchData();
      }, []); 
    


    const fetchBands = () => {
        fetch("/bands")
        .then((res) => res.json())
        .then((BandData) => {
            setBands(BandData)
        })
    }
    const fetchEvents = () => {
        fetch("/events")
        .then((res) => res.json())
        .then((eventData) => {
            setEvents(eventData)
        })
    }
    const fetchVenues = () => {
        fetch("/venues")
        .then((res) => res.json())
        .then((venueData) => {
            setVenues(venueData)
        })
    }
   
    const addBand = (newBand) => {
        setBands([...bands, newBand])
    }

    const addVenue = (newVenue) => {
        setVenues([...venues, newVenue])
    }

    const addEvent = (newEvent) =>{
        setEvents([...events, newEvent])
    }


    const login = (user) => {
        setUser(user)
        fetchBands()
        fetchVenues()
        fetchEvents()
        setLoggedIn(true)
    }
    
    const logout = () => {
        setUser({})
        setBands([])
        setEvents([])
        setVenues([])
        setLoggedIn(false)
    }
    
    const signup = (user) => {
        setUser(user)
        fetchBands()
        fetchEvents()
        fetchVenues()
        setLoggedIn(true)
    }
    return(
        <UserContext.Provider value={ {user, bands, setBands, addBand, addVenue, venues, setVenues, events, setEvents, addEvent, login, logout, signup, loggedIn, setUser}}>
            {children}
        </UserContext.Provider>

    )

}

export { UserContext, UserProvider }