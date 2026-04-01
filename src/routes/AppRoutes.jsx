import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from '../screens/Home'
import Pages from '../screens/Pages'
import Profile from '../screens/Profile'
import Invoice from '../screens/Invoice'
import Tasks from '../screens/Tasks'
import Calendar from '../screens/Calendar'
import Auth from '../screens/Auth'
import Ecommerce from '../components/Ecommerce'
import Analytics from '../screens/Analytics'
import Crypto from '../screens/Crypto'
import Settings from '../screens/Settings'
import Projects from '../screens/Projects'
import Clients from '../screens/Clients'
import Orders from '../screens/Orders'
import Pricing from '../screens/Pricing'
import Chat from '../screens/Chat'
import Blank from '../screens/Blank'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Dashboard with nested routes */}
        <Route path='/dashboard' element={<Home/>}>
          <Route index element={<Navigate to='analytics' replace />} />
          <Route path='analytics' element={<Analytics/>} />
          <Route path='ecommerce' element={<Ecommerce/>} />
          <Route path='crypto' element={<Crypto/>} />
        </Route>

        {/* Pages with nested routes */}
        <Route path='/pages' element={<Pages/>}>
          <Route index element={<Navigate to='settings' replace />} />
          <Route path='settings' element={<Settings/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='clients' element={<Clients/>} />
          <Route path='orders' element={<Orders/>} />
          <Route path='pricing' element={<Pricing/>} />
          <Route path='chat' element={<Chat/>} />
          <Route path='blank' element={<Blank/>} />
        </Route>

        {/* Main Pages routes */}
        <Route path='/profile' element={<Profile/>} />
        <Route path='/invoice' element={<Invoice/>} />
        <Route path='/tasks' element={<Tasks/>} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/auth' element={<Auth/>} />
      </Routes>
    </div>
  )
}

export default AppRoutes
