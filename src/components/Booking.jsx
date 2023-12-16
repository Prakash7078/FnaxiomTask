import React from 'react'
import group from '../../public/Group 167.png'
import { Button, Input } from '@material-tailwind/react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Booking() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
      <div className='flex justify-center items-start '>
        <img src={group} alt='book' className='sm:w-96 w-2/3'/>
      </div>
      <div className='flex items-center justify-start lg:justify-center'>
        <form className='shadow-xl flex flex-col gap-5 p-5 w-80 my-20 mx-auto md:mx-0'>
          <h1 className='font-bold text-xl '>Book now</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className='flex flex-col gap-2'>
            <label className='font-bold text-sm'>CITY</label>
            <input type='text' placeholder='Placeholder' className='border p-2 bg-blue-gray-100'/>
          </div>
          <div className='grid grid-cols-2  gap-2'>
            <div className='flex flex-col gap-2'>
              <label className='font-bold text-sm'>ARRIVAL</label>
              <input type='text' placeholder='10 October' className='border py-2 w-full bg-blue-gray-100'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-bold text-sm'>ROOM</label>
              <input type='text' placeholder='11 October' className='border py-2 w-full bg-blue-gray-100'/>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2'>
              <div className='flex flex-col gap-2 '>
                <label className='font-bold text-sm'>STAR</label>
                <div className='flex items-center bg-blue-gray-100 rounded-sm rounded-md px-2'>
                  <FaPlus/>
                  <input type='text' className='border py-2 w-full bg-blue-gray-100 text-center' value={4} />
                  <FaMinus/>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-bold text-sm'>STAR</label>
                <div className='flex items-center bg-blue-gray-100 rounded-md px-2'>
                  <FaPlus/>
                  <input type='text' className='border py-2 w-full bg-blue-gray-100 text-center' value={4}/>
                  <FaMinus/>
                </div>
            </div>
            
          </div>
          <Button color='black' className='text-white w-fit'>BOOK NOW</Button>
        </form>
      </div>
    </div>
  )
}

export default Booking