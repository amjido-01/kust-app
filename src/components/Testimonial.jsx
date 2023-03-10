// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Testimony } from './Testimony';
import { Swiper, SwiperSlide } from 'swiper/react';
import computer from '../assets/computer.jpg';
// import { IoChevronForwardSharp } from 'react-icons/io';
import { FaChevronLeft } from 'react-icons/fa'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Swiper.use([Autoplay])

export const Testimonial = () => {
  return (
    <Swiper className='border-2 border-red-700 md:w-[65%] overflow-hidden min-h-[200px] my-10 px-8 md:px-4'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    //   spaceBetween={20}
      slidesPerView={3}
      navigation={{
        prevEl: '.prev-button',
        nextEl: '.next-button',
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
            200: {
                slidesPerView: 1,
                spaceBetween: 10
            },
          // when window width is >= 640px
          400: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 768px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1583: {
            slidesPerView: 3,
            spaceBetween: 30
          },
      }}
    >
        <div className='prev-button'>
        <img src={<FaChevronLeft/>} alt='Previous' />
      </div>
      <div className='next-button'>
        <img src={<FaChevronLeft/>} alt='Next' />
      </div>
      <SwiperSlide className='flex items-center justify-center'>
        <Testimony name='name' dept='computer sci' img={computer}/>
      </SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><Testimony name='name' dept='computer sci' img={computer}/></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><Testimony name='name' dept='computer sci' img={computer}/></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><Testimony name='name' dept='computer sci' img={computer}/></SwiperSlide>
    </Swiper>
  );
};