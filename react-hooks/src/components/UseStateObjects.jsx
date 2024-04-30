import React, { useState } from 'react'

function UseStateObjects() {

    const [name, setName] = useState({firstname: '', lastname: ''})
    
    return (
        <form>
            <input type='text' value={name.firstname} onChange={e => setName({ ...name, firstname: e.target.value })}/>
            <input type='text' value={name.lastname} onChange={e => setName({ ...name, lastname: e.target.value })}/>
            <p>Your first name is {name.firstname}</p>
            <p>Your last name is {name.lastname}</p>
            {/* <p>{JSON.stringify(name)}</p> */}
        </form>
  )
}

export default UseStateObjects
