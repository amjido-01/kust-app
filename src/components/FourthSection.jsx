import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Testimony } from './Testimony';
import computer from '../assets/computer.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const FourthSection = () => {

  const data = [
    {
        name: "muhammmd ni’imatullahi",
        dept: "level 200 computer science",
        imgURI: computer
    },
    {
        name: "Abubakar muhammad ala",
        dept: "level 200 computer sci GDSC core team.",
        imgURI: computer
    },
    {
        name: "Bukhari auwal",
        dept: "level 300 computer science ex-GDSC lead.",
        imgURI: computer
    },
    {
        name: "Sulaiman isah",
        dept: "level 200 computer science",
        imgURI: computer
    }
]

  return (
    <section className='md:w-[70%] relative overflow-hidden mx-auto min-h-[200px] py-5 px-4 my-10'>
    <Swiper className='container mx-auto border-2'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Testimony name={data[3].name} dept={data[3].dept} img={computer}></Testimony></SwiperSlide>
      <SwiperSlide><Testimony name={data[2].name} dept={data[2].dept} img={computer}></Testimony></SwiperSlide>
      <SwiperSlide><Testimony name={data[1].name} dept={data[1].dept} img={computer}></Testimony></SwiperSlide>
      <SwiperSlide><Testimony name={data[0].name} dept={data[0].dept} img={computer}></Testimony></SwiperSlide>
    </Swiper>
    </section>
  );
};
