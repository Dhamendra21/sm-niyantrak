import React from 'react'
import MainRoutes from './router/MainRoutes'
import LocomotiveScroll from 'locomotive-scroll'
import DashboardRoutes from './router/DashboardRoutes'
//  npm install locomotive-scroll@beta


const App = () => {
  const scroll = new LocomotiveScroll()
  return (
    <div className='w-screen flex flex-col justify-center bg-[#101F22]' >
      <MainRoutes/>
      {/* <DashboardRoutes/> */}
    </div>
  )
}

export default App