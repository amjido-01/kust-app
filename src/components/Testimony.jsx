import React from 'react'

export const Testimony = ({ name, dept, img }) => {
    return (
        <div className='inline-block max-w-[20rem] h-[100%] py-4 px-4 bg-[#eeeeee] rounded-md'>
            <div>
                <p className='mt-2 text-[13px] text-center text-[#000000]'>To be honest, I had a great experience with this website. before it's was a hassle to get the study materials, but now that I am on this website, at home I can download the materials and study them. Thank you for this opportunity you brought to us.</p>
            </div>
            <div className='flex items-center mt-4'>
                <img className='w-10 h-10 object-cover rounded-full border border-[#0F9D58]' src={img} />
                <div className='pl-2'>
                    <a href='#' className="text-[12px] md:text-[14px] capitalize font-medium text-[#000000]">{name}</a>
                    <p className='text-[10px]'>{dept}</p>
                </div>
            </div>
        </div>
    )
}
