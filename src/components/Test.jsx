import React from 'react';
import { useState } from 'react';

export const Test = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
  })

  const [count, setCont] = useState(0)

  const handleFirstName = (e) => {
    setUserInput((preState) => {
      return {
        ...preState,
        firstName: e.target.value
      }
    })
  }
const handleCounter = () => {
  setCont(count + 1)
}

  return (
    <div>
      <input type="text" value={userInput.firstName} onChange={handleFirstName} placeholder='first name' className='border-2 border-red-500 mt-4' />
      {userInput.firstName.trim().length >= 3 ? "valid" : "invalid"}
      <br></br>
      <input type="text" placeholder='last name' className='border-2 border-red-500 mt-4' />
      {count}
      <button onClick={handleCounter}>count</button>
    </div>
  )
}
