import React from 'react';
import { useState } from 'react';

export const Test = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: ""
  })

  const handleFirstName = (e) => {
    setUserInput((prevState) => {
      return{
        ...prevState,
        firstName: e.target.value
      }
    })
  }
  const handleLasttName = (e) => {
    setUserInput((prevState) => {
      return{
        ...prevState,
        lastName: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userInput)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstName} value={userInput.firstName} placeholder='first-name' className='border-2 border-red-500 mt-2'/>
      {userInput.firstName.trim().length >= 3 ? "valid" : "invalid"}
      <br />
      <input type="text" onChange={handleLasttName} value={userInput.lastName} placeholder='last-name' className='border-2 border-red-500 mt-2'/> <br />
      <button type='submit' className='border-2'>submit</button>
    </form>
  )
}
