import React,{ useState } from "react";
import { useContext } from "react";
import {UserContext} from './Context/user'
import { useNavigate } from "react-router-dom";


function LoginForm(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorsList, setErrorsList] = useState([])   

    const { login } = useContext(UserContext)
    const navigate  = useNavigate()
    
    function handleSubmit(e){
        e.preventDefault()
        fetch('/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((res) => {
            if (res.ok){
                res.json().then((userData) => {
                    login(userData)
                    navigate('/myprofile')
                })
            } else {
                res.json().then((err) => {
                    setErrorsList([err.error])
                })
            }
        }) 
    }
    
    return(
        <>
            <div>
                <h1> Login </h1>
                <form onSubmit={handleSubmit}>
                    <label> Username </label>
                    <input type='text' id="user" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="username"/>
                    <label> Password </label>
                    <input type="password" id="pw" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"/>
                    <br/>
                    <br/>
                    <button type="submit"> Login </button>
                </form>
            </div>
            <div>
            {errorsList ? <p style={{color: "red"}} > {errorsList} </p> : null}
            </div>
        </>
    )
}

export default LoginForm