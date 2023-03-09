import React from 'react';
import { Card } from './Card';
import { MdChair } from 'react-icons/md';
import { MdSwapHorizontalCircle } from 'react-icons/md';
import { MdFactCheck } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import { useEffect } from 'react';

export const Main = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-out',
      delay: 100,
    });
  }, [])

  return (
    <section className='relative flex-col justify-center items-center bg-[#FFFFFF] min-h-[250px] capitalize'>
      <h1 data-aos="fade-right" className='text-[#000000] text-center font-bold my-8 px-1 text-[24px]'>you can get them all for free now! <span id='target'></span> </h1>
      <div className="container mx-auto md:w-[70%]">
        <div className="flex flex-col md:flex-row justify-evenly card mx-auto">
          <Card title='comfortably' icon={<MdChair />} animation='fade-up'></Card>
          <Card title='easily' icon={< MdSwapHorizontalCircle /> } animation='fade-left'></Card>
          <Card title='reliable' icon={<MdFactCheck/>} animation='fade-right'></Card>
        </div>

      </div>
    </section>
  )
}
