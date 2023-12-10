import nature from '../../public/nature2.jpg';
function Brand() {
    
  return (
    <div id="#home" className='bg-contain relative' style={{"backgroundImage":`url(${nature})`}}>
        <div className='h-screen w-full'>
            <div className='w-fit mx-auto text-white flex flex-col items-center pt-16 gap-2'>
                <h1 className='font-bold text-4xl'>Fourrededand</h1>
                <p>with rago teahyung</p>
            </div>
            <div className='pt-64 md:pl-16 w-fit mx-auto md:mx-0'>
                <select className='px-4 py-3 rounded-2xl bg-black text-white border-2 border-white'>
                    <option>Ansoform</option>
                </select>
            </div>
        </div>

    </div>
  )
}

export default Brand