import React from 'react'
import { Button } from './Button'

export const Header = () => {
  return (

    <nav className="bg-[#212327] font-bold px-2 sm:px-4 py-2 fixed w-full z-20 top-0 left-0">

        <div className="container flex flex-wrap items-center justify-between md:justify-evenly mx-auto">

            <div>
                <a href="/" className="flex items-center">
                    <span className="self-center text-lg whitespace-nowrap dark:text-white">KUST<span className='text-[#0F9D58]'>Booklets</span></span>
                </a>
            </div>
            

            {/* desktop */}
                <div className="hidden md:block items-center justify-between w-full md:w-auto">
                    
                    <ul className="flex p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded capitalize md:bg-transparent md:p-0 font-medium" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded capitalize md:p-0 font-medium">Documents</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded capitalize md:p-0 font-medium">about us</a>
                        </li>
                    </ul>
                </div>

                <div className="flex">
                    <Button value='support us' border='1px solid'></Button>
                </div>
            

        </div>
    </nav>

  )
}
