import React from 'react'
import mam from '../../public/Group 167.png'
import { Button } from '@material-tailwind/react'
function About() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-14 md:gap-2 my-20'>
          <div className='mx-auto  flex flex-col gap-6'>
            <div className='flex items-center shadow-lg w-72 gap-4 p-3 '>
                <img src={mam} className='w-10' alt='image1'/>
                <div>
                  <h1 className='font-bold'>Jenny welson</h1>
                  <p>Lewregec cgcvc cg cgcvsc gcvdcvshbsjsd</p>
                </div>
            </div>
            <div className='flex items-center shadow-lg w-72 gap-4 p-3 '>
                <img src={mam} className='w-10' alt='image1'/>
                <div>
                  <h1 className='font-bold'>Jenny welson</h1>
                  <p>Lewregec cgcvc cg cgcvsc gcvdcvshbsjsd</p>
                </div>
            </div>
            <div className='flex items-center shadow-lg w-72 gap-4 p-3 '>
                <img src={mam} className='w-10' alt='image1'/>
                <div>
                  <h1 className='font-bold'>Jenny welson</h1>
                  <p>Lewregec cgcvc cg cgcvsc gcvdcvshbsjsd</p>
                </div>
            </div>
           
            
        </div>
        <div className='ml-7 flex flex-col gap-4 md:items-start items-center justify-center'>
          <div>
            <h1 className='text-3xl font-bold'>Tropic Adventure</h1>
            <h1 className='font-thin text-2xl'>for Students</h1>
          </div>
          <h1>Student Tropical Vacation: Relax and Recharge</h1>
          <ul style={{"listStyle":"disc"}} className='md:ml-10 '>
            <li>loreum epusum ddhdd dddd</li>
            <li>loreum epusum ddhdd dddd</li>
            <li>loreum epusum ddhdd dddd</li>
            <li>loreum epusum ddhdd dddd</li>
            <li>loreum epusum ddhdd dddd</li>
          </ul>
          <Button color='orange' className='rounded-full'>Explore More</Button>
        </div>
    </div>
  )
}

export default About