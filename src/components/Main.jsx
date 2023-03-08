import React from 'react';
import { Card } from './Card';
import { MdChair } from 'react-icons/md';
import { MdSwapHorizontalCircle } from 'react-icons/md';
import { MdFactCheck } from 'react-icons/md'

export const Main = () => {
  return (
    <section className='relative flex-col justify-center items-center bg-[#FFFFFF] min-h-[250px] border-2 capitalize'>
      <h1 className='text-[#000000] text-center font-bold my-8 px-1 text-[24px]'>you can get them all for free now!</h1>
      
      <div className="container border-2 mx-auto md:w-[70%]">
        <div className="flex flex-col md:flex-row justify-evenly card mx-auto">
          <Card title='comfortably' icon={<MdChair />}></Card>
          <Card title='easily' icon={< MdSwapHorizontalCircle /> }></Card>
          <Card title='reliable' icon={<MdFactCheck/>}></Card>
        </div>

      </div>
      
    </section>
  )
}
