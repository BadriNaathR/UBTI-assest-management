import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
    <div>
      <Navbar/>
          <Outlet/>
      <footer className='flex justify-center'>© 2024 Copyright: Unlimited Innovations Ind Pvt Ltd</footer>
    </div>
  )
}

export default Main