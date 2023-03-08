import React from 'react'

export const Card = (props) => {
  return (
    <div>
        <div className='flex max-w-md overflow-hidden bg-white py-3 px-10 md:px-0 my-3 text-center'>
            <div className=''>
            <h1 className=' font-bold text-[18px] '>{props.title}</h1>
            <p className=' font-normal'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit. adipisicing elit. Qui, perspiciatis?</p>
            </div>
        </div>
    </div>
  )
}
