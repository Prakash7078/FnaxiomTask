import React from 'react'

function Testimonials() {
    const data=[
        {
            image:"./Group 171.png",
            name:"Corey Korsgaard",
            desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            image:"./Group 167.png",
            name:"Jakob Aminoff",
            desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            image:"./Mask group.png",
            name:"Carla Press",
            desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        }
    ]
  return (
    <div className='my-10'>
        <h1 className='text-center my-10 font-bold text-3xl'>Testimonials</h1>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 md:mx-20 mx-10'>
            {data.map((item)=>(
                <div key={item.name} className='mx-auto flex flex-col items-center justify-center gap-5 w-full'>
                    <img src={item.image} alt='image' className='w-24 rounded-full object-cover'/>
                    <h1 className='border-b-2 border-green-300 pb-2'>{item.name}</h1>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Testimonials