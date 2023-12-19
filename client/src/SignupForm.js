import {React, useState, useContext} from 'react'
import { UserContext } from './Context/user'
import { useNavigate } from 'react-router-dom'

function SignupForm(){
    const {signup, avatar, setAvatar} = useContext(UserContext)
    
    const [ errorsList, setErrorsList ] = useState([])
    const [signupFormSheet, setSignupFormSheet] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    });

    function handleInputChange(e) {
        setSignupFormSheet({ ...signupFormSheet, [e.target.name]: e.target.value });
    }
    function handleFileChange(e) {
        setAvatar({ avatar: e.target.files[0] });
      }



    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        for (let data in signupFormSheet){
            formData.append(data, signupFormSheet[data])
        }
        if (avatar !== null){
            formData.append("avatar", avatar.avatar)
        }

        fetch('/signup', {
            method: 'POST',
            
            body: formData,
        })
        .then(res => {
            if (res.ok){
                res.json().then((userData) => {
                    signup(userData)
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
                <label htmlFor='username'> Username: </label>
                <input type="text" id="username" name='username' value={signupFormSheet.username} onChange={handleInputChange} placeholder="username"/>
                <br/>
                <label htmlFor='password'> Password: </label>
                <input type="password" id="password" name='password' value={signupFormSheet.password} onChange={handleInputChange} placeholder="password"/>
                <br/>
                <label htmlFor='password_confirmation'> Confirm Password: </label>
                <input type="password" id="password_confirmation" name='password_confirmation' value={signupFormSheet.password_confirmation} onChange={handleInputChange} placeholder="password confirmation"/>
                <br/>
                <label htmlFor='avatar'> Upload User Profile Picture </label>
                <input type='file' name='avatar' onChange={e => handleFileChange(e)} />
                <br/>
                <br/>
                <button type="submit"> Signup </button>
            </form>
            
            {errorsList ? errorsList.map((e) => ( <ul key={e} style={{color: "red"}}>{e}</ul>)) : null}
            <h5> Already a Member? </h5>
        </div>
    )
}

export default SignupForm