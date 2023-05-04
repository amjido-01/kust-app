import React from 'react';
import { useState } from 'react';

export const Test = () => {
  const [state, setState] = useState({
    count: 0,
    name: "",
    isOn: false
  })

  function handleIncrement() {
    setState(pre => ({
      ...pre,
      count: pre.count + 1
    }))
  }

  function handleName(e) {
    setState(pre => ({
      ...pre,
      name: e.target.value
    }))
  }

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleIncrement}> Increment </button>

      <input type="text" value={state.name} onChange={handleName}/>
      <p>{state.name}</p>
    </div>
  )
}
