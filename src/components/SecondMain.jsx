import React from 'react';
import SecondHeroImg from '../assets/main.png'
import comfetti from '../assets/conright.svg'

export const SecondMain = () => {
  return (
    <section className='bg-[#212327] relative min-h-[400px] py-16 px-8 md:px-4 md:pt-32'>
      <div className='container mx-auto border-2 border-red-600 flex flex-col md:flex-row capitalize'>

        <div className='text-white md:w-1/2 border-2 '>
          <img src={SecondHeroImg} className='object-cover' alt="" srcset="" />
          {/* <img src={comfetti} alt="" srcset="" /> */}
        </div>

        <div className='text-white md:w-1/2 border-2'>
          <h1>our struggle</h1>
          <p>
            Our aim is to alleviate the challenges that students encounter when searching for reliable handouts or past question papers for their relevant courses. For this reason, we have developed this platform for your convenience.
          </p>
        </div>

      </div>

      <div className="curvetwo">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  )
}
