import React from 'react'

export const Button = ({ value, color, border }) => {
  return (
    <div>
        <button type="button" style={{backgroundColor: color, border: border}} className="text-white font-medium text-sm px-5 py-2 text-center capitalize">{value}</button>
    </div>
  )
}
