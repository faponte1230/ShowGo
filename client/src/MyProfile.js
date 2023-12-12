import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context/user'

function MyProfile() {
    const { loggedIn } = useContext(UserContext)

    if (!loggedIn) {
        
        //const userArr = user.arcades
        //console.log(userArr)
    
        
        //console.log(showRevs)

        
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
                   <h2> Welcome ! </h2>
                    <p> Click on the links above and view bands & upcoming shows! </p>
                    
                    
                    
                </div>
            )
        }
}

export default MyProfile