import React from 'react'
import image from '../../public/Mask group.png';
import { Button } from '@material-tailwind/react';
function Discount() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 mx-auto my-10 '>
        <div className='flex flex-col justify-center md:items-start items-center mx-10 sm:mx-0 lg:ml-44 md:ml-20  gap-4'>
            <p className='font-semibold'>Get 20% off for student</p>
            <div className='flex flex-col gap-1 '>
                <h1 className='font-bold sm:text-3xl text-xl'>Student discounts available.</h1>
                <h1 className='text-xl'>Get ready for some fun in the sun!</h1>
            </div>
            <ul style={{"listStyle":"disc"}} className='md:ml-10 ml-2'>
                <li>loreum epusum ddhdd dddd</li>
                <li>loreum epusum ddhdd dddd</li>
                <li>loreum epusum ddhdd dddd</li>
                <li>loreum epusum ddhdd dddd</li>
                <li>loreum epusum ddhdd dddd</li>
            </ul>
            <Button color='deep-orange' className='rounded-full mt-5'>Explore More</Button>
        </div>
        <div className='flex justify-center md:justify-start lg:justify-center w-full'>
            <img src={image} className='lg:w-96 sm:w-80 w-2/3 h-fit ml-4 flex' alt='image'/>
        </div>
    </div>
  )
}

export default Discount