import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

export const Testimonial = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }, []);

      
  return (
    <section className='bg-[#FFFFFF] md:border-4 border-green-700 relative min-h-[300px] '>
       <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
   
    </section>
  )
}












// <Swiper className='border-2 border-red-700 md:w-[65%]'
// modules={[Navigation, Pagination, Scrollbar, A11y]}
// spaceBetween={50}
// slidesPerView={3}
// onSlideChange={() => console.log('slide change')}
// onSwiper={(swiper) => console.log(swiper)}>

// <SwiperSlide>
//     <div className="max-w-[20rem] border-2 py-4 px-4 bg-[#D9D9D9] shadow-lg rounded-lg ">
//         <div>
//             <p className="mt-2 text-[13px] text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
//         </div>
//         <div className="flex items-center border mt-4">
//             <img className="w-10 h-10 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
//             <div className='pl-2'>
//                 <a href="#" className="text-[14px] font-medium text-[#000000]">Muhammad Ni'imatullahi</a>
//                 <p>Lorem ipsum.</p>
//             </div>
//         </div>
//     </div>
// </SwiperSlide>

// <SwiperSlide>Slide 2</SwiperSlide>
// <SwiperSlide>Slide 3</SwiperSlide>
// <SwiperSlide>Slide 4</SwiperSlide>
// <SwiperSlide>Slide 4</SwiperSlide>
// <SwiperSlide>Slide 4</SwiperSlide>
// </Swiper>
