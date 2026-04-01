import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='w-320 h-16 bg-white flex items-center px-6 shadow-xs'>
           <div className='w-full flex  items-center gap-4  '>
            <div className='w-7 h-5 flex flex-col justify-between'>
                <div className='w-full h-[4px] rounded bg-gray-700'></div>
                <div className='w-full h-[4px] rounded  bg-gray-700'></div>
                <div className='w-[70%] h-[4px] rounded  bg-gray-700'></div>
            </div>
                <div className='w-70 rounded-4xl bg-[#F3F6FA] flex justify-between px-4 py-1.5'>
                    <input type="text" placeholder='Search...' className='outline-none border-none'/>
                    <i className="ri-search-line"></i>

                </div>
                <div className='flex items-center gap-1 text-[#3B3B3B]'>
                    <h1>Mega Menu</h1>
                    <i className="ri-arrow-down-s-line"></i>    
                </div>
                <div className='flex items-center gap-1 text-[#3B3B3B]'>
                    <h1>Resources</h1>
                    <i className="ri-arrow-down-s-line"></i>    
                </div>
            <div>
            </div>
            </div> 
            <div className='flex gap-2 cursor-pointer items-center justify-between  w-60 j'>
                 <i className="hover:text-[#3B7DDD] text-xl ri-notification-3-line"></i>
                 <i className="hover:text-[#3B7DDD] text-xl ri-chat-4-line"></i>
                 <img src="https://png.pngtree.com/png-vector/20230905/ourmid/pngtree-us-flag-sign-png-image_9947494.png" alt="" className='w-[22px] h-[22px] object-center object-cover rounded-full ' />
                 <img src="https://demo.adminkit.io/img/avatars/avatar.jpg" alt="" className='h-[35px] w-[35px] rounded'/>

                 
            </div>
           
        </div>
      
    </div>
  )
}

export default Navbar
