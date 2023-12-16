import React from 'react'
import prof from '../../public/Group 171.png';
import { Button } from '@material-tailwind/react';
function Brand() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 bg-[#fcf8ec]'>
        <div className='flex flex-col justify-center md:items-start items-center mx-2 mt-10 md:mx-0 md:mt-0 lg:ml-56 md:ml-20 gap-4 '>
            <h1 className='font-bold text-lg'>Discover the beauty of the tropics</h1>
            <h1 className='font-bold text-3xl'>Tropical</h1>
            <h1 className='font-bold text-3xl'>Destinations</h1>
            <h1 className=' font-thin text-3xl'>For Students</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
            <Button color='orange' className='rounded-full px-10'>Sign Up</Button>
        </div>
        <div className='flex md:justify-start justify-center items-center'>
            <img src={prof} className="object-cover lg:w-1/2 w-3/4 h-fit mb-10 md:ml-20"alt='image'/>
        </div>
    </div>
  )
}

export default Brand