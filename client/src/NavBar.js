import React, {useContext} from "react";
import {UserContext} from "./Context/user"
import { Link, useNavigate } from "react-router-dom"

function NavBar(){
    const {user,loggedIn,logout} = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
        })
        .then(()=> {
            navigate('/')
            logout()
            
        })
    }
    if(!loggedIn){
        return (
            <div className="home-div">

            </div>
        )
    } else {
        return(
            <div>
                <br/>
                <header className="header">
                <img src={'https://miro.medium.com/v2/resize:fit:2400/1*0bzg8mvGWxlTK7V0krpq2w.jpeg'}
                alt={'ShowGO'}
                style={{ width: '100px', height: '100px' }}
                />

                </header>
                <h4 className="header-button">
                    Hello {user.username} <br/>
                    <button onClick={logoutUser}> Logout </button>
                </h4>
                <br/>

                <Link to='/'>
                    <button className="button" > Home </button>
                </Link>
                
                <Link to='/venues'>
                    <button className="button"> Venues </button>
                </Link>

                <Link to='/bands'>
                    <button className="button"> Bands </button>
                </Link>

                <Link to='/events'>
                    <button className="button"> Events </button>
                </Link>

                <Link to='/myprofile'>
                    <button className="button"> My Profile </button>
                </Link>

            </div>
        
        )
    }
}

export default NavBar

