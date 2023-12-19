import React, { useEffect, useState } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [bands, setBands] = useState([]);
    const [venues, setVenues] = useState([]);
    const [events, setEvents] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [avatar, setAvatar] = useState(null);

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
    
                    // Check if userData.image_url is available before setting avatar
                    if (userData.image_url) {
                        setAvatar(userData.image_url);
                        console.log('Avatar set in UserProvider:', userData.image_url);
                    }
                } else {
                    setLoggedIn(false);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
    
        fetchData();
    }, []);

    // Use useEffect to update avatar when user.image_url changes
    useEffect(() => {
        if (user.image_url) {
            setAvatar(user.image_url);
        }
    }, [user.image_url]);



    const fetchBands = () => {
        fetch("/bands")
            .then((res) => res.json())
            .then((BandData) => {
                setBands(BandData);
            });
    };

    const fetchEvents = () => {
        fetch("/events")
            .then((res) => res.json())
            .then((eventData) => {
                setEvents(eventData);
            });
    };

    const fetchVenues = () => {
        fetch("/venues")
            .then((res) => res.json())
            .then((venueData) => {
                setVenues(venueData);
            });
    };

    const addBand = (newBand) => {
        setBands([...bands, newBand]);
    };

    const addVenue = (newVenue) => {
        setVenues([...venues, newVenue]);
    };

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    const login = (user) => {
        setUser(user);
        // Check if user.image_url is available before setting avatar
        setAvatar(user.image_url || null);
        fetchBands();
        fetchVenues();
        fetchEvents();
        setLoggedIn(true);
    };

    const logout = () => {
        setUser({});
        setBands([]);
        setEvents([]);
        setVenues([]);
        setAvatar(null);
        setLoggedIn(false);
    };

    const signup = (user) => {
        setUser(user);
        // Check if user.image_url is available before setting avatar
        setAvatar(user.image_url || null);
        fetchBands();
        fetchEvents();
        fetchVenues();
        setLoggedIn(true);
    };


    return (
        <UserContext.Provider
            value={{ user, avatar, setAvatar, bands, setBands, addBand, addVenue, venues, setVenues, events, setEvents, addEvent, login, logout, signup, loggedIn, setUser }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };
