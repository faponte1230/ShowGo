import  React, {useEffect, useState } from 'react';

const UserContext = React.createContext();

function UserProvider( { children } ){
    const [ user, setUser ] = useState({})
    const [ bands, setBands ] = useState([])
    const [ venues, setVenues ] = useState([])
    const [ events, setEvents ] = useState([])
    const [ loggedIn, setLoggedIn ] = useState(false)

    useEffect(() => {
        fetch('/me')
        .then((r) => {
          if (r.ok){
            r.json().then((userData) => {
                setUser(userData)
                console.log(userData)
                setLoggedIn(true)
                fetchBands()
                fetchEvents()
                fetchVenues()
            })
          }
          else {
            r.json().then((r) => {
                setLoggedIn(false)
                console.log(r)
            })
          }
        })
      }, [])


    const fetchBands = () => {
        fetch("/bands")
        .then((res) => res.json())
        .then((BandData) => {
            setBands(BandData)
            //console.log(arcData)
        })
    }
    const fetchEvents = () => {
        fetch("/events")
        .then((res) => res.json())
        .then((eventData) => {
            setEvents(eventData)
            //console.log(arcData)
        })
    }
    const fetchVenues = () => {
        fetch("/venues")
        .then((res) => res.json())
        .then((venueData) => {
            setVenues(venueData)
            //console.log(arcData)
        })
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
        <UserContext.Provider value={ {user, bands, venues, events, login, logout, signup, loggedIn, setUser}}>
            {children}
        </UserContext.Provider>

    )

}

export { UserContext, UserProvider }