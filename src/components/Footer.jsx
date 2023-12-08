import React from 'react'
import DefaultTable from './TablesDemo'
import Table2 from './Table2'
import Table3 from './Table3'
import CardMain from './CardMain'

function Footer() {
  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
        <div className=' flex flex-col gap-5 md:p-8 bg-blue-gray-900 '>
            <DefaultTable/>
            <Table3/>
            <Table2/>
            <select className=' mx-auto bg-blue-gray-400 py-2 rounded-xl w-3/4 px-20'>
              <option>select</option>
            </select>
        </div>
        <div className='overflow-visible bg-blue-gray-900 '>
          <CardMain/>
        </div>

    </div>
  )
}

export default Footer