import React, { useState, useEffect } from 'react';
import {AiOutlineToTop} from "react-icons/ai"
import Aos from 'aos';
import "aos/dist/aos.css";

export const ScrollBtn = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 300);
      };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

      
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in ease-out",
      delay: 100,
    });
  }, []);

  return (
    <div>
        <button
        data-aos="fade-right"
      className={`fixed bottom-8 right-8 p-2 z-20 rounded-full bg-gray-500 text-white ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
        <AiOutlineToTop className='w-8 h-8'/>
    </button>
    </div>
  )
}
