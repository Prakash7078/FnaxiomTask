import { Avatar } from '@material-tailwind/react'
import React from 'react'

function CardMain() {
  return (
    <div className='bg-blue-gray-900'>
        <div className='bg-white flex justify-between h-full m-4 rounded-md items-center'>
            <div className='bg-black m-7 p-3 rounded-lg'>
                <h1>Recommende</h1>
                <p>Hello Iam Prakash</p>
                <h1>Recommende</h1>
                <p>Hello Iam Prakash</p>
                <h1>Recommende</h1>
                <p>Hello Iam Prakash</p>
                <h1>Recommende</h1>
                <p>Hello Iam Prakash</p>
                <h1>Recommende</h1>
                <p>Hello Iam Prakash</p>
                
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
        <div className='flex gap-4 justify-end items-center'>
            <div className='rounded-3xl border-2 w-fit p-2 border-gray-400 text-gray-400'>
                DEC
            </div>
            <div className='rounded-3xl flex items-centergap-2 justify-center border-2 w-fit p-2 font-bold border-gray-400 text-gray-400'>
                ..
            </div>
            <div className='rounded-full border-2 w-fit p-2 font-bold border-gray-400 text-gray-400'>
                .
            </div>
            <div className='rounded-full border-2 font-bold w-fit p-2 border-gray-400 text-gray-400'>
                .
            </div>
            <div className='rounded-full border-2 w-fit p-2 border-gray-400 text-gray-400 bg-red-300'>
                Dec
            </div>
            <div className='rounded-full border-2 w-fit p-2 border-gray-400 text-gray-400'>
                uno
            </div>
            
        </div>
    </div>
  )
}

export default CardMain