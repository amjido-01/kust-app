import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Testimony } from './Testimony';
import { Swiper, SwiperSlide } from 'swiper/react';
import computer from '../assets/computer.jpg';
// import right from '../assets/Vector.png';
import left from '../assets/left.png'
import right from '../assets/right.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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
        <section className='md:w-[70%] relative overflow-hidden mx-auto min-h-[200px] py-5 px-4 my-10'>
            <Swiper className='container mx-auto relative'
            
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
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
                    // >=200
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    // >= 40px
                    400: {
                        slidesPerView: 1,
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

                {/* <div className='next-button absolute top-20 z-10 -right-2'>
                    <img src={left} alt='Next'/>
                </div>
                
                <div className='next-button'>
                    <img src={right} alt='Next'/>
                </div> */}
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
        </section>
    );
};