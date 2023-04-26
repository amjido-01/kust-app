import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import lady from "../assets/lady.jpg"
import placeHolderImg from "../assets/ladyplace.jpg"
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Test = () => {
  return (
    <div>
        <LazyLoadImage src={lady} alt="test" placeholderSrc={placeHolderImg}  effect='blur' className='w-1/2 mt-28'/>
        <LazyLoadImage src={lady} alt="test" placeholderSrc={placeHolderImg}  effect='blur' className='w-1/2 mt-28'/>
        <LazyLoadImage src={lady} alt="test" placeholderSrc={placeHolderImg}  effect='blur' className='w-1/2 mt-28'/>
        <LazyLoadImage src={lady} alt="test" placeholderSrc={placeHolderImg}  effect='blur' className='w-1/2 mt-28'/>
        <LazyLoadImage src={lady} alt="test" placeholderSrc={placeHolderImg}  effect='blur' className='w-1/2 mt-28'/>
        <LazyLoadImage src={lady} alt="test" placeholderSrc={placeHolderImg}  effect='blur' className='w-1/2 mt-28'/>
        <LazyLoadImage src={lady} alt="test" placeholderSrc={placeHolderImg}  effect='blur' className='w-1/2 mt-28'/>
        <LazyLoadImage src={lady} alt="test" placeholderSrc={placeHolderImg}  effect='blur' className='w-1/2 mt-28'/>
        <LazyLoadImage src={lady} alt="test" placeholderSrc={placeHolderImg}  effect='blur' className='w-1/2 mt-28'/>
    </div>
  )
}
