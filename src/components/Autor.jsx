import React from 'react'

export const Autor = ({src, quote, name, level, role}) => {
  return (
    <div>
        <div>
            <p>{quote}</p>
        </div>
        <img src={src} className="w-[30%] text-[#000000]" alt="" />
        <div className="content border-2 capitalize">
            <h1>{name}</h1>
            <p>{level}</p>
            <span>{role}</span>
        </div>
    </div>
  )
}
