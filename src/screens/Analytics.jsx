import React from 'react'

const Analytics = () => {
  return (
    <div className='p-6 space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>Analytics Dashboard</h1>
          <p className='text-gray-500 mt-1'></p>
        </div>
        <div className='flex gap-2'>
          <button className='px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 hover:bg-gray-100'>Invite a Friend</button>
          <button className='px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700'>New Project</button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500'>Sales</p>
          <h2 className='text-3xl font-semibold mt-2'>2,382</h2>
          <p className='mt-2 text-sm text-green-600 font-medium'>-3.65% Since last week</p>
        </div>
        <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500'>Earnings</p>
          <h2 className='text-3xl font-semibold mt-2'>$21,300</h2>
          <p className='mt-2 text-sm text-green-600 font-medium'>+6.65% Since last week</p>
        </div>
        <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500'>Visitors</p>
          <h2 className='text-3xl font-semibold mt-2'>14,212</h2>
          <p className='mt-2 text-sm text-green-600 font-medium'>+5.25% Since last week</p>
        </div>
        <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500'>Orders</p>
          <h2 className='text-3xl font-semibold mt-2'>64</h2>
          <p className='mt-2 text-sm text-red-500 font-medium'>-2.25% Since last week</p>
        </div>
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-semibold'>Recent Movement</h3>
          <div className='flex items-center gap-2'>
            <select className='border border-gray-200 rounded-lg px-3 py-1 text-sm'>
              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
            </select>
            <input type='search' placeholder='Search..' className='border border-gray-200 rounded-lg px-3 py-1 text-sm' />
          </div>
        </div>
        <div className='h-52 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg flex items-center justify-center text-blue-700 text-sm font-medium'>
         
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5'>
          <h3 className='text-lg font-semibold'>Calendar</h3>
          <div className='mt-4 grid grid-cols-7 text-center text-xs gap-1 text-gray-500'>
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>
          <div className='mt-3 grid grid-cols-7 text-center text-sm gap-1 text-gray-700'>
            {Array.from({ length: 35 }, (_, index) => <span key={index} className='py-2 rounded hover:bg-blue-50'>{index + 1}</span>)}
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5'>
          <h3 className='text-lg font-semibold mb-2'>Real-Time</h3>
          <div className='h-48 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-lg relative border border-blue-100 overflow-hidden'>
            <div className='absolute inset-0 opacity-40 bg-[url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")] bg-center bg-cover'></div>
            <div className='relative h-full w-full flex items-center justify-center'>
              <div className='grid grid-cols-6 gap-2'>
                {['US','UK','DE','IN','JP','AU'].map((code, idx) => (
                  <span key={code} className='w-3 h-3 rounded-full bg-blue-600 animate-pulse' style={{animationDelay: `${idx * 120}ms`}} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5'>
          <h3 className='text-lg font-semibold mb-2'>Browser Usage</h3>
          <div className='h-48 flex items-center justify-center'>
            <div className='relative w-28 h-28'>
              <div className='w-full h-full rounded-full' style={{ background: 'conic-gradient(#1d4ed8 0 40%, #f59e0b 40% 70%, #ef4444 70% 85%, #111827 85% 100%)' }}></div>
              <div className='absolute inset-8 bg-white rounded-full'></div>
            </div>
          </div>
          <div className='mt-4 text-sm'>
            <div className='flex items-center justify-between'><span className='text-sky-600'>Chrome</span><span>43%</span></div>
            <div className='flex items-center justify-between'><span className='text-orange-500'>Firefox</span><span>30%</span></div>
            <div className='flex items-center justify-between'><span className='text-red-500'>Edge</span><span>15%</span></div>
            <div className='flex items-center justify-between'><span className='text-gray-900'>Other</span><span>12%</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
