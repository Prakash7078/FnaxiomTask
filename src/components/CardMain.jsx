import { Avatar } from '@material-tailwind/react'
import React from 'react'
import { LuDot } from "react-icons/lu";
function CardMain() {
  return (
    <div className=''>
        <div className='relative '>
            <div className='h-96 bg-blue-gray-900 rounded-l-xl w-3/4 absolute right-0 '></div>
            <div className='h-96 bg-blue-gray-900 rounded-l-xl w-3/4 absolute right-12 top-10 '></div>
            <div className='absolute left-20 top-16 '>
                <div className='bg-gray-400 flex flex-col md:flex-row justify-between h-full m-7 p-5 rounded-md items-center '>
                    <div className='bg-black m-7 p-10 rounded-lg'>
                        <h1>Recommende</h1>
                        <p className='border-b-2'>Hello Iam Prakash</p>
                        <div className='flex border-b-2 gap-4 p-2'>
                            <div className='rounded-full bg-gray-500 px-2'>4</div>
                            <div className='rounded-full bg-gray-500 px-2'>4</div>
                            <div className='rounded-full bg-gray-300 px-2'>4</div>
                        </div>
                        <div className='flex flex-col border-b-2 gap-2 p-2'>
                            <div className='flex gap-4'>
                                <div className='rounded-full bg-gray-500 px-2'>4</div>
                                <div className='rounded-full bg-gray-500 px-2'>4</div>
                                <div className='rounded-full bg-gray-300 px-2'>4</div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='rounded-full bg-gray-500 px-2'>4</div>
                                <div className='rounded-full bg-gray-500 px-2'>4</div>
                                <div className='rounded-full bg-gray-300 px-2'>4</div>
                            </div>
                        </div>
                        <h1>Recommende</h1>
                        <p className='border-b-2'>Hello Iam Prakash</p>
                    
                        
                    </div>
                    <div className='p-5'>
                        <div className='shadow-lg flex flex-col gap-2 px-2 py-3'>
                            <h1>Hello how are u</h1>
                            <div className='shadow-xl'>
                                <p>I am totaly fine</p>
                                <p>nice to meet u</p>
                            </div>
                        </div>
                    
                        <div className='shadow-lg flex flex-col gap-2 px-2 py-3'>
                            <h1>Hello how are u</h1>
                            <div className='shadow-xl'>
                                <p>I am totaly fine</p>
                                <p>nice to meet u</p>
                            </div>
                        </div>
                    
                        <div className='shadow-lg flex flex-col gap-2 px-2 py-3'>
                            <h1>Hello how are u</h1>
                            <div className='shadow-xl'>
                                <p>I am totaly fine</p>
                                <p>nice to meet u</p>
                            </div>
                        </div>
                    
                    </div>
                    <div>
                        <div className='flex gap-4 p-4 items-center'>
                            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                            <div className=''>
                                <h1>Hello how are u</h1>
                                <div className='shadow-lg'>
                                <p>I am totaly fine </p>
                                <p>nice to meet u</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 p-4 items-center'>
                            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                            <div className=''>
                                <h1>Hello how are u</h1>
                                <div className='shadow-lg'>
                                <p>I am totaly fine </p>
                                <p>nice to meet u</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 p-4 items-center'>
                            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                            <div className=''>
                                <h1>Hello how are u</h1>
                                <div className='shadow-lg'>
                                <p>I am totaly fine </p>
                                <p>nice to meet u</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex gap-4 justify-end items-center pr-5 text-xs'>
                    <div className='rounded-3xl border-2 w-fit px-1 py-2 border-gray-700 text-gray-400'>
                        DEC
                    </div>
                    <div className='flex items-center w-12 border-2 border-gray-700 rounded-3xl'>
                        <LuDot color='gray' size={25} />
                        <LuDot color='gray' size={25}/>
                    </div>
                    <div className='rounded-full border-2  border-gray-700 text-gray-400'>
                    <LuDot color='gray' size={25} />
                    </div>
                    <div className='rounded-full border-2  border-gray-700 text-gray-400'>
                    <LuDot color='gray' size={25} />
                    </div>
                    
                    <div className='rounded-full border-2 w-fit p-2 border-gray-700 text-gray-400 bg-red-300'>
                        Dec
                    </div>
                    <div className='rounded-full border-2 w-fit p-2 border-gray-700 text-gray-400'>
                        uno
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardMain