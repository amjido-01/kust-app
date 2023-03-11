import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import support from '../assets/support.png';

export const Sixth = () => {
  return (
    <section className='linear relative min-h-[400px] py-16 md:py-20 px-8 md:px-4'>
        <div className='container md:w-[65%] mx-auto text-[#000000] flex flex-col md:flex-row items-center justify-center capitalize'>

        <div data-aos="fade-left" className='md:w-1/2 text-start w-[95%]'>
            <p>
                We have devoted a lot of time and effort to collect and organize these materials for you, in order to spare you some hassle, expense and time. If you appreciate our work, please give us a thumbs up and 
            </p>
        </div>
        
        <div data-aos="fade-right" className='md:w-1/2 mt-10 md:mt-5 mb-5 md:ml-10 pl-4'>
          <img src={ support } className='object-cover w-1/2 md:w-[85%]' alt="section_img" />
        </div>


      </div>

        <div className="custom-shape-divider-top-1678566261">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
    </section>
  )
}
