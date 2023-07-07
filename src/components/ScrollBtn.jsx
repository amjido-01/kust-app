import React, { useState, useEffect } from 'react';
import {AiOutlineToTop} from "react-icons/ai"

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

  return (
    <div>
        <button
      className={`fixed bottom-4 right-4 p-2 z-20 rounded-full bg-gray-500 text-white ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
        <AiOutlineToTop />
    </button>
    </div>
  )
}
