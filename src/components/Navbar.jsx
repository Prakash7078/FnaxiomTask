import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-8 py-4 items-center justify-center bg-gray-300'>
      <div>
      <h1 className='text-gray-800 font-bold lg:pl-10'>Huel, Weetem</h1>
      </div>
      <div>
        <ul className='flex text-brown-400 gap-5  px-5 py-2 rounded-full items-center bg-slate-500 w-fit text-black'>
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