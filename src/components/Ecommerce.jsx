import React from 'react'

const Ecommerce = () => {
  return (
    <div className='p-6 space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>E-Commerce Dashboard</h1>
          <p className='text-gray-500 mt-1'></p>
        </div>
        <div className='flex gap-2'>
          <button className='px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 hover:bg-gray-100'>Invite a Friend</button>
          <button className='px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700'>New Project</button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500'>Income</p>
          <h2 className='text-3xl font-semibold mt-2'>$47,482</h2>
          <p className='mt-2 text-sm text-green-600 font-medium'>+3.65% Since last week</p>
        </div>
        <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500'>Orders</p>
          <h2 className='text-3xl font-semibold mt-2'>2,542</h2>
          <p className='mt-2 text-sm text-red-500 font-medium'>-5.25% Since last week</p>
        </div>
        <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500'>Activity</p>
          <h2 className='text-3xl font-semibold mt-2'>16,300</h2>
          <p className='mt-2 text-sm text-green-600 font-medium'>+4.65% Since last week</p>
        </div>
        <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
          <p className='text-sm text-gray-500'>Revenue</p>
          <h2 className='text-3xl font-semibold mt-2'>$20,120</h2>
          <p className='mt-2 text-sm text-green-600 font-medium'>+2.35% Since last week</p>
        </div>
      </div>

      <div className='grid grid-cols-1 2xl:grid-cols-3 gap-4'>
        <div className='xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-5'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold'>Total Revenue</h3>
            <div className='flex items-center gap-2'>
              <select className='border border-gray-200 rounded-lg px-3 py-1 text-sm'>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
              </select>
              <input type='search' placeholder='Search..' className='border border-gray-200 rounded-lg px-3 py-1 text-sm' />
            </div>
          </div>
          <div className='h-64 rounded-lg overflow-hidden'>
            <svg viewBox='0 0 100 50' className='w-full h-full'>
              <defs>
                <linearGradient id='ecomRevGrad' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#bfdbfe' stopOpacity='0.7' />
                  <stop offset='100%' stopColor='#bfdbfe' stopOpacity='0.1' />
                </linearGradient>
              </defs>
              <polygon points='0,40 10,36 20,38 30,32 40,29 50,24 60,27 70,22 80,28 90,24 100,20 100,50 0,50' fill='url(#ecomRevGrad)' />
              <polyline points='0,40 10,36 20,38 30,32 40,29 50,24 60,27 70,22 80,28 90,24 100,20' fill='none' stroke='#1d4ed8' strokeWidth='2' strokeLinejoin='round' />
              <g fill='#1d4ed8'>
                {[0,10,20,30,40,50,60,70,80,90,100].map((x, idx) => {
                  const y=[40,36,38,32,29,24,27,22,28,24,20][idx]
                  return <circle key={x} cx={x} cy={y} r='1.2' />
                })}
              </g>
              <line x1='0' y1='40' x2='100' y2='40' stroke='#cbd5e1' strokeWidth='0.2' />
            </svg>
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5'>
          <h3 className='text-lg font-semibold mb-4'>Sales By State</h3>
          <div className='h-64 bg-white rounded-lg border border-blue-100 p-4 grid grid-cols-2 gap-4'>
            <div className='h-full flex flex-col justify-between'>
              {[
                { state: 'California', value: 3200, color: 'from-blue-500 to-blue-300' },
                { state: 'Texas', value: 2850, color: 'from-cyan-500 to-cyan-300' },
                { state: 'New York', value: 2450, color: 'from-indigo-500 to-indigo-300' },
                { state: 'Florida', value: 2100, color: 'from-sky-500 to-sky-300' }
              ].map((item) => (
                <div key={item.state} className='mb-2'>
                  <div className='flex justify-between text-sm font-medium text-gray-600'>
                    <span>{item.state}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className='h-2 mt-1 rounded-full bg-gray-100'>
                    <div className={`h-full rounded-full bg-gradient-to-r ${item.color}`} style={{ width: `${(item.value / 4000) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className='relative'>
              <div className='h-full rounded-lg bg-[url("https://upload.wikimedia.org/wikipedia/commons/c/cf/United_States_Regions_-_2012.svg")] bg-cover bg-center opacity-60'></div>
              <div className='absolute inset-0 flex items-center justify-center text-xs font-semibold text-blue-700'>US Sales Heatmap</div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5'>
          <h3 className='text-lg font-semibold mb-2'>Top Selling Products</h3>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li className='flex justify-between'>Product Apollo <span>28%</span></li>
            <li className='flex justify-between'>Product Bongo <span>23%</span></li>
            <li className='flex justify-between'>Product Canary <span>16%</span></li>
          </ul>
        </div>

        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5'>
          <h3 className='text-lg font-semibold mb-2'>Recent Orders</h3>
          <div className='space-y-2 text-sm text-gray-600'>
            <p>Order #1024 - Completed</p>
            <p>Order #1025 - Processing</p>
            <p>Order #1026 - Shipped</p>
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5'>
          <h3 className='text-lg font-semibold mb-2'>Monthly Sales</h3>
          <div className='h-48 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-gray-400'></div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
