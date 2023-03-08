import React from 'react';
import { Card } from './Card';

export const Main = () => {

  // <div className='relativebg-red-500 min-h-[400px] py-[100px] md:px-[20vh]'>
  //     <div className='py-[100px] md:px-[20vh] border mx-auto'>
  //       <h1>hello </h1>
  //     </div>
  //   </div>
  return (
    <section className='relative bg-[#FFFFFF] min-h-[350px] border-2  capitalize'>
      <div className="container border-2 mx-auto md:w-[70%]">
        <h1 className='text-[#000000] text-center font-bold text-[28px]'>you can get them all for free now!</h1>
        <div className="card">
          <Card></Card>
        </div>

      </div>
      
    </section>
  )
}
