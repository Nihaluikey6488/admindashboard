import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router'

const SideBar = () => {
  const [expandedMenu, setExpandedMenu] = useState('dashboard')
  const location = useLocation()

  const toggleMenu = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName)
  }

  return (
    <div className='w-64 bg-[#222E3C] px-6 py-5 text-white flex flex-col h-screen overflow-y-auto'>
      <div>
        <h1 className='font-semibold text-xl'>
          AdminKit 
          <sup className='bg-[#3B7DDD] text-xs py-0.5 px-1 rounded ml-1'>PRO</sup>
        </h1>
        <div className='flex items-center mt-6 gap-3'>
          <img src='https://demo.adminkit.io/img/avatars/avatar.jpg' alt='' className='w-[40px] h-[40px] object-cover object-center rounded flex-shrink-0' />
          <div className='flex flex-col justify-center'>
            <p className='text-sm'>Charles Hall</p>
            <p className='opacity-60 font-light text-xs'>Designer</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col mt-10 flex-1'>
        <p className='text-xs font-semibold tracking-wider mb-3 text-gray-400'>PAGES</p>

        <div className='flex flex-col gap-2'>
          <button
            onClick={() => toggleMenu('dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded text-left transition-colors ${location.pathname.includes('/dashboard') ? 'bg-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}
          >
            <span>Dashboard</span>
            <span className={`ml-auto transition-transform ${expandedMenu === 'dashboard' ? 'rotate-180' : ''}`}>&#9660;</span>
          </button>

          {expandedMenu === 'dashboard' && (
            <div className='ml-6 mt-2 flex flex-col gap-1 border-l border-[#3B7DDD] pl-3'>
              <NavLink to='/dashboard/analytics' className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${isActive ? 'text-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
                <span>Analytics</span>
              </NavLink>
              <NavLink to='/dashboard/ecommerce' className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${isActive ? 'text-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
                <span>E-commerce</span>
              </NavLink>
              <NavLink to='/dashboard/crypto' className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${isActive ? 'text-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
                <span>Crypto</span>
              </NavLink>
            </div>
          )}

          <button
            onClick={() => toggleMenu('pages')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded text-left transition-colors ${location.pathname.includes('/pages') ? 'bg-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}
          >
            <span>Pages</span>
            <span className={`ml-auto transition-transform ${expandedMenu === 'pages' ? 'rotate-180' : ''}`}>&#9660;</span>
          </button>

          {expandedMenu === 'pages' && (
            <div className='ml-6 mt-2 flex flex-col gap-1 border-l border-[#3B7DDD] pl-3'>
              <NavLink to='/pages/settings' className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${isActive ? 'text-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
                <span>Settings</span>
              </NavLink>
              <NavLink to='/pages/projects' className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${isActive ? 'text-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
                <span>Projects</span>
              </NavLink>
              <NavLink to='/pages/clients' className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${isActive ? 'text-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
                <span>Clients</span>
              </NavLink>
              <NavLink to='/pages/orders' className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${isActive ? 'text-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
                <span>Orders</span>
              </NavLink>
              <NavLink to='/pages/pricing' className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${isActive ? 'text-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
                <span>Pricing</span>
              </NavLink>
              <NavLink to='/pages/chat' className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${isActive ? 'text-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
                <span>Chat</span>
              </NavLink>
              <NavLink to='/pages/blank' className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${isActive ? 'text-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
                <span>Blank Page</span>
              </NavLink>
            </div>
          )}
          <NavLink to='/profile' className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded transition-colors ${isActive ? 'bg-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
            <span>Profile</span>
          </NavLink>
          <NavLink to='/invoice' className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded transition-colors ${isActive ? 'bg-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
            <span>Invoice</span>
          </NavLink>
          <NavLink to='/tasks' className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded transition-colors ${isActive ? 'bg-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
            <span>Tasks</span>
          </NavLink>
          <NavLink to='/calendar' className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded transition-colors ${isActive ? 'bg-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
            <span>Calendar</span>
          </NavLink>
          <NavLink to='/auth' className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded transition-colors ${isActive ? 'bg-[#3B7DDD]' : 'hover:bg-[#2E3B4A]'}`}>
            <span>Auth</span>
          </NavLink>
          <div>
            <div className='p-4 flex flex-col gap-3 bg-[#2B3947] rounded mt-5'>
              <h1>Weekly Sales Report</h1>
              <p className='text-xs'>Your Weekly sales report is <br />ready for download!</p>
              <button className='px-4 py-1 rounded border-1 border-[#3B7DDD] text-[#3B7DDD] w-full hover:bg-[#3B7DDD]  hover:text-white cursor-pointer'>Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
