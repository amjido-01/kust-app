import React from 'react'

export const Autor = ({src, quote, name, level, role, alt, quoteColor}) => {
  return (
    <div className='border-2 border-green-600 text-[#000000]      '>
        <div>
            <p className='border-2 border-green-400' style={{background: quoteColor}}>{quote}</p>
        </div>
        <img src={src} className="w-[30%] text-[#000000]" alt={alt} />
        <div className="content border-2 capitalize">
            <h1>{name}</h1>
            <p>{level}</p>
            <span>{role}</span>
        </div>
    </div>
  )
}
