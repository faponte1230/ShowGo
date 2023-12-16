import {React, useState, useContext} from 'react'
import { UserContext } from './Context/user'
import { useNavigate } from 'react-router-dom'

function SignupForm(){
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ password_confirmation, setPassword_confirmation ] = useState('')
    const [ errorsList, setErrorsList ] = useState([])

    const {signup} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: password_confirmation
            }),
        })
        .then(res => {
            if (res.ok){
                res.json().then((userData) => {
                    signup(userData)
                    console.log(userData)
                    navigate('/myprofile')
                })
            } else {
                res.json().then((errorData) => {
                    setErrorsList(errorData.errors)
                    
                   
                })
            }
        
        })
    }

    return(
        <div>
            <h1> Signup </h1>
            <form onSubmit={handleSubmit}>
                <label> Username: </label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
                <br/>
                <label> Password: </label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                <br/>
                <label> Confirm Password: </label>
                <input type="password" id="password_confirmation" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} placeholder="password confirmation"/>
                <br/>
                <button type="submit"> Signup </button>
            </form>
            
            {errorsList ? errorsList.map((e) => ( <ul key={e} style={{color: "red"}}>{e}</ul>)) : null}
            <h5> Already a Member? </h5>
        </div>
    )
}

export default SignupForm