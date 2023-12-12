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
            navigate('/login')
            logout()
            
        })
    }
    if(!loggedIn){
        return (
            <div>
                <Link to='/login'>
                    <button className="button"> login </button>
                </Link>

                <Link to='/signup'>
                    <button className="button" > Signup </button>
                </Link>
            </div>
        )
    } else {
        return(
            <div>
                <h4>
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

