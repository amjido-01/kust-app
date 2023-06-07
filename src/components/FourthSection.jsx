import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Testimony } from './Testimony';
import computer from '../assets/computer.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const FourthSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-out',
      delay: 100,
    });
  }, [])

  const data = [
    {
      name: "muhd ni’imatullahi",
      dept: "level 200 computer science",
      imgURI: computer
    },
    {
      name: "Abubakar ala",
      dept: "level 200 computer science.",
      imgURI: computer
    },
    {
      name: "Bukhari auwal",
      dept: "level 300 computer science.",
      imgURI: computer
    },
    {
      name: "Sulaiman isah",
      dept: "level 200 computer science",
      imgURI: computer
    }
  ]

  return (
      <section className='md:w-[70%]  relative overflow-hidden mx-auto min-h-[200px] py-5 px-7 my-10'>
        <h1 data-aos="fade-down-right" className='my-4 capitalize text-[#000000] font-bold px-1 text-[24px]'>what students a saying about this site</h1>
      <Swiper className='container mx-auto'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        breakpoints={{
          // >=200
          200: {
            slidesPerView: 1.5,
            spaceBetween: 10
          },
          // >= 40px
          400: {
            slidesPerView: 1.5,
            spaceBetween: 10
          },
          // >= 640px
          640: {
            slidesPerView: 2,
          },
          // >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // >= 1583px
          1583: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        }}
        >
        <SwiperSlide className='flex items-center justify-center'><Testimony name={data[3].name} dept={data[3].dept} img={computer}></Testimony></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'><Testimony name={data[2].name} dept={data[2].dept} img={computer}></Testimony></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'><Testimony name={data[1].name} dept={data[1].dept} img={computer}></Testimony></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'><Testimony name={data[0].name} dept={data[0].dept} img={computer}></Testimony></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'><Testimony name={data[2].name} dept={data[2].dept} img={computer}></Testimony></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'><Testimony name={data[1].name} dept={data[1].dept} img={computer}></Testimony></SwiperSlide>
      </Swiper>
    </section>
  );
};
