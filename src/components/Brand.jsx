import {Card,CardHeader,CardBody,Typography} from '@material-tailwind/react';
import nature from '../../public/nature2.jpg';
function Brand() {
    
  return (
    <div id="#home" className=''>
        <Card
            shadow={false}
            className="relative rounded-none  h-[25rem] lg:h-[40rem] xl:h-[0rem] w-full  sm:max-w-full  justify-center overflow-hidden text-center mt-5 md:mt-0"
            >
            <CardHeader
                floated={false}
                shadow={true}
                color="transparent"
                className={`absolute inset-0 m-0 h-full w-full rounded-none bg-contain `}
                style={{ backgroundImage:`url(${nature})`}}>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full  " />
            </CardHeader>
            <CardBody className="">
                <div className='relative bottom-56'>
                    <h1 className='font-serif font-bold text-4xl text-gray-200'>Fourredend</h1>
                    <p className='pt-2 text-white'>with raco testming</p>
                </div>
                <div className='relative right-96 top-24'>
                   <select className='bg-blue-gray-600 px-10 py-4 text-white rounded-xl border-gray-500 border-2'>
                        <option>Abcdf</option>
                    </select>
                </div>
            </CardBody>
           
        </Card>
       

    </div>
  )
}

export default Brand