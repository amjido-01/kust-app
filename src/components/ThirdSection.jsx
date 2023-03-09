import React from 'react';
import techonoly from '../assets/technology.png';
import secondconleft from '../assets/secondconleft.svg'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const ThirdSection = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: 'ease-out',
          delay: 100,
        });
      }, [])

  return (
    <section className='bg-[#212327] relative min-h-[400px] md:pb-2 px-8 md:px-4 '>
        <div className="container md:w-[70%] mx-auto flex flex-col md:flex-row-reverse items-center justify-center">
            <img src={secondconleft} className='absolute w-[30%] top-10 md:top-10 md:w-[16%] left-4 md:left-10' alt="svg_icon"/>
           
            <div data-aos="fade-down-right" className='flex items-center justify-end pr-5'>
                <img src={techonoly} className='object-cover w-[60%] md:w-[77%]' alt="section_img"/>
            </div>

            <div data-aos="fade-up-right" className='text-[#D9D9D9] md:w-1/2 text-start md:text-end pt-20'>
                <h1 className='font-bold text-[18px] leading-[10px] py-4'>Technology advancement</h1>
                <p>
                    Every day, technology progresses and simplifies things for us in various ways. We aspire to keep up with the changes and innovations that it brings to our lives.
                </p>
            </div>

        </div>
    </section>
  )
}
