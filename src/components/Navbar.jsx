import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between md:px-8 py-4 items-center  bg-gray-300'>
      <div>
      <h1 className='text-gray-800 font-bold lg:pl-10 text-xs md:text-xl'>Huel, Weetem</h1>
      </div>
      <div>
        <ul className='flex text-brown-400 gap-5 text-xs md:text-lg px-5 py-2 rounded-full items-center bg-slate-500 w-fit '>
          <li className='cursor-pointer '>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Contact</li>
          <li className='cursor-pointer'>Address</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar