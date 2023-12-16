import { Button } from '@material-tailwind/react'
import { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const[menu,setMenu]=useState(false);
  const data=[
    {name:'Home'},
    {name:'About'},
    {name:'Schedules'},
    {name:'Membership'},
    {name:'Pricing'},
  ]
  return (
    <div className='relative'>
      <div className='flex justify-between p-5 items-center'>
        <div className='md:hidden'>
          {!menu? <LuMenu size={25} onClick={()=>setMenu(true)}/>:
          <RxCross2 size={25} onClick={()=>setMenu(false)}/>}
        </div>
        <div className='md:flex hidden justify-center w-full'>
          <ul className='flex md:gap-6 gap-3'>
            {data && data.map((item)=>(
              <li className='font-semibold' key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className='flex items-center gap-10'>
          <button className='px-2 sm:px-3 py-2'>Offers</button>
          <Button color='orange'>Courses</Button>
        </div>
      </div>
      {menu && <div className='w-full z-50 absolute bg-white '>
        <ul className='flex flex-col md:gap-6 gap-3 pl-10'>
            {data && data.map((item)=>(
              <li className='font-semibold' key={item.name}>{item.name}</li>
            ))}
          </ul>
      </div>}
    </div>
  )
}

export default Navbar