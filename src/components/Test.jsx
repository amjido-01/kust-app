import React from 'react'
import { useState } from 'react'

export const Test = () => {
  const [update, setUpdate] = useState('hello')

  const handleClick = () => {
    setUpdate('hello world')
  }
  return (
    <div>
       {update} <br></br>
       <button onClick={handleClick} className='border-2 border-green-500'>click me</button>
    </div>
  )
}
