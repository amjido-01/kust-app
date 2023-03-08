import React from 'react';
import { Card } from './Card';

export const Main = () => {

  // <div className='relativebg-red-500 min-h-[400px] py-[100px] md:px-[20vh]'>
  //     <div className='py-[100px] md:px-[20vh] border mx-auto'>
  //       <h1>hello </h1>
  //     </div>
  //   </div>
  return (
    <section className='relative flex-col justify-center items-center bg-[#FFFFFF] min-h-[250px] border-2 capitalize'>
        <h1 className='text-[#000000] text-center font-bold my-8 px-1 text-[24px]'>you can get them all for free now!</h1>
      
      <div className="container border-2 mx-auto md:w-[70%]">
        <div className="flex flex-col md:flex-row justify-evenly card mx-auto">
          <Card title='comfortably'></Card>
          <Card title='easily'></Card>
          <Card title='reliable'></Card>
        </div>

      </div>
      
    </section>
  )
}
