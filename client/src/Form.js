import React, {useState} from 'react'

function Form() {
  const [ user, setUser ] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(user)
    setUser('')
  }
  return (
    <div>
        <h2> New User? </h2>
        <form onSubmit={handleSubmit}>
            <label> Username: </label>
            <input type="text" id="username" value={user} onChange={e => setUser(e.target.value)}  />
            <br/>
            <button type="submit">button</button>
        </form>
    </div>
  )
}

export default Form