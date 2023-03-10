import React from 'react'

export const Testimony = ({ name, dept, img }) => {
    return (
        <div className=' inline-block align-top max-w-[20rem] border-2 py-4 px-4 bg-[#D9D9D9] shadow-lg rounded-lg'>
            <div>
                <p className='mt-2 text-[13px] text-[#000000]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
            </div>
            <div className='flex items-center border mt-4'>
                <img className='w-10 h-10 object-cover rounded-full border-2 border-indigo-500' src={img} />
                <div className='pl-2'>
                    <a href='#' className="text-[14px] font-medium text-[#000000]">{name}</a>
                    <p>{dept}</p>
                </div>
            </div>
        </div>
    )
}
