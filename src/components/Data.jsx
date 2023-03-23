import React from 'react'

const facultiesList = [
    {
      id: 0,
      name: "FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)",
    },
    {
      id: 1,
      name: "FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)",
    },
    {
      id: 2,
      name: "FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)",
    },
  ];
export const Data = () => {
 const data = facultiesList.map(item => {
    <li>{item.name}</li>
 })
  return (
    <div>
        <ul>{data}</ul>
    </div>
  )
}
