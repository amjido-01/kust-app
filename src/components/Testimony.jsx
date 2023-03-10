import React from 'react'

export const Testimony = () => {
    return (
        <div className="max-w-[20rem] border-2 py-4 px-4 bg-[#D9D9D9] shadow-lg rounded-lg ">
            <div>
                <p className="mt-2 text-[13px] text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
            </div>
            <div className="flex items-center border mt-4">
                <img className="w-10 h-10 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                <div className='pl-2'>
                    <a href="#" className="text-[14px] font-medium text-[#000000]">Muhammad Ni'imatullahi</a>
                    <p>Lorem ipsum.</p>
                </div>
            </div>
        </div>
    )
}
