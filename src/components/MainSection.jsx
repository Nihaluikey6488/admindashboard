import React from 'react'
import AppRoutes from '../routes/AppRoutes'
import Navbar from './Navbar'

const MainSection = () => {
  return (
    <div className='flex-1 bg-[#F5F7FB] h-screen overflow-auto'>
      <Navbar />
      <div className='p-6'>
        <AppRoutes />
      </div>
    </div>
  )
}

export default MainSection
