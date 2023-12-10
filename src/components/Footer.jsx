import React from 'react'
import DefaultTable from './TablesDemo'
import Table2 from './Table2'
import Table3 from './Table3'
import CardMain from './CardMain'

function Footer() {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-1 bg-gradient-to-t from-black/80 via-black/80 to-black/30 bg-blue-gray-400'>
        <div className=' flex flex-col gap-5 md:p-8 col-span-1'>
            <DefaultTable/>
            <Table3/>
            <Table2/>
            <select className=' mx-auto bg-gray-800 text-gray-400 py-4 rounded-full w-full px-14'>
              <option>select the option</option>
            </select>
        </div>
        <div className='overflow-visible col-span-2 '>
          <CardMain/>
        </div>

    </div>
  )
}

export default Footer