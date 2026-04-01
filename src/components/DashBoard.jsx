import React from 'react'
import SideBar from './SideBar'
import MainSection from './MainSection'

const DashBoard = () => {
  return (
    <div className='w-screen h-screen flex'>
      <SideBar />
      <MainSection />
    </div>
  )
}

export default DashBoard
