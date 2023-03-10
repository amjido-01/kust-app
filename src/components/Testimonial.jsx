import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/swiper.min.css';
import 'swiper/swiper-bundle.css';

export const Testimonial = () => {
  return (
    <section className='bg-[#FFFFFF] md:border-4 border-green-700 relative min-h-[300px] '>
        <Swiper className='border-2 border-red-700 md:w-[65%]'
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>

            <SwiperSlide>
                hello world
            </SwiperSlide>
            
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
   
    </section>
  )
}
