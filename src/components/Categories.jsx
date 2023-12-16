import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ReactPaginate from "react-paginate";
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";

function Categories() {
    const data=[
        {
            name:"Harvard University",
            address:"Cambridge, Massachusetts, UK",
            image:"./cardimage.png",
        },
        {
            name:"Oxford University",
            address:"Oxford, England",
            image:"./cardimage1.png",
        },
        {
            name:"Standford University",
            address:"Stanford, California",
            image:"./card-image-2.png",
        },
        {
            name:"Nanyang Technological University",
            address:"Nanyang Ave, Singapura",
            image:"./card-image-3.png",
        },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 3; // Number of products per page
    const totalPages = Math.ceil(data?.length / perPage);
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };
    const currentProducts = data?.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );
  
  return (
    // <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay:0.1  }}>
      <div id='#category' className='p-6 md:mx-10 '>
          <div className='mb-10  lg:mt-3 flex flex-col gap-2 items-center md:items-start'>
              <h1 className='font-bold text-xl md:text-4xl'>Our Destinations</h1>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 pb-10  '>
            {currentProducts && currentProducts.map((item)=>(
                <div key={item.id} className='w-fit flex flex-col gap-4 bg-slate-100 shadow-xl mx-auto '>
                    <img src={item.image} className='h-fit w-full object-cover' alt='car'/>
                    <h1 className="font-bold text-xl ml-3">{item.name}</h1>
                    <div className="flex justify-between items-center p-3 ">
                        <p className="font-semibold">{item.address}</p>
                        <div className="bg-blue-gray-100 p-2 rounded-full"><HiOutlineDotsHorizontal/></div>
                    </div>
                </div>
            ))}
        </div>
         <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName="flex mt-4 justify-center"
            previousLabel={<FaArrowLeftLong/>}
            nextLabel={<FaArrowRightLong/>}
            breakLabel="..."
            activeClassName="text-primary"
            disabledClassName="text-gray-500 cursor-not-allowed"
            pageClassName="px-2 cursor-pointer"
            previousClassName="px-2 cursor-pointer"
            nextClassName="px-2 cursor-pointer"
            breakClassName="px-2"
        />    
      </div>
    // </motion.div>
  )
}

export default Categories