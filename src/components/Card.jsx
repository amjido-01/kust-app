import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Card = (props) => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-out',
            delay: 100,
        });
    }, [])
  return (
    
    <div>
        <div data-aos="fade-up" className='flex max-w-md overflow-hidden bg-white py-3 px-10 md:px-3 my-3 text-center'>
            <div className=''>
                <div className='flex items-center justify-center'>
                    {props.icon}
                    <h1 className='font-bold text-[18px] px-4'>{props.title}</h1>
                </div>
                <p className=' font-normal'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit. adipisicing elit. Qui, perspiciatis?</p>
            </div>
        </div>
    </div>
  )
}
