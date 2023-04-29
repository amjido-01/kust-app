import React from 'react'
import { Download } from './Download'
import { Data } from '../Data'


export const File = () => {
  const listItems = Data.map(item => <li key={item.id} className='bg-white text-[15px] my-[4px] font-medium leading-[24px] uppercase text-[#000000] p-2'>{item.first_name}</li>);
  // const listItems = Data.map((item) =>
  // <li key={item.id} >{item.first_name}</li>
// );

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
 )
}

{/* <div className='flex justify-center'>
        <ul>
          {listItems}
        </ul>

        <Download></Download>
    </div> */}