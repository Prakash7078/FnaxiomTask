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
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/40 via-black/20 " />
            </CardHeader>
            <CardBody className="relative bottom-56">
                <div className=' '>
                    <h1 className='font-serif font-bold text-4xl text-gray-200'>Fourredend</h1>
                    <p className='pt-2 text-white'>with raco testming</p>
                </div>
            </CardBody>
           
        </Card>
       

    </div>
  )
}

export default Brand