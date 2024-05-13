import React from 'react'

const Tags = ({id, title}) => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-gray-500', 'bg-teal-500', 'bg-orange-500'];
    const randomColorClass = colors[Math.floor(Math.random() * colors.length)];
    return (
    <div key={id} className={`font-poppins text-white font-small ${randomColorClass} rounded-full py-2 px-4 mx-2 my-1 text-sm`}>{title}</div>
  )}


export default Tags