// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Testimony } from './Testimony';
import { Swiper, SwiperSlide } from 'swiper/react';
import computer from '../assets/computer.jpg';
// import { IoChevronForwardSharp } from 'react-icons/io';
// import { FaChevronLeft } from 'react-icons/fa'
// import { FaHandHoldingHeart } from 'react-icons/fa'
import right from '../assets/Vector.png';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Swiper.use([Autoplay])

export const Testimonial = () => {

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
    <Swiper className='md:w-[65%] overflow-hidden min-h-[200px] my-10 px-8 md:px-4'
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
        <div className='prev-button absolute top-10 text-red-700 z-10 w-4 h-4'>
        <img src={right} alt='Previous'/>
      </div>
      <div className='next-button'>
        <img src={right} alt='Next'/>
      </div>
      <SwiperSlide className='flex items-center justify-center'>
        <Testimony name={data[3].name} dept={data[3].dept} img={computer}/>
      </SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><Testimony name={data[0].name} dept={data[0].dept} img={computer}/></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><Testimony name={data[1].name} dept={data[1].dept} img={computer}/></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><Testimony name={data[1].name} dept={data[1].dept} img={computer}/></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><Testimony name={data[1].name} dept={data[1].dept} img={computer}/></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><Testimony name={data[2].name} dept={data[2].dept} img={computer}/></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><Testimony name={data[2].name} dept={data[2].dept} img={computer}/></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><Testimony name={data[2].name} dept={data[2].dept} img={computer}/></SwiperSlide>
    </Swiper>
  );
};