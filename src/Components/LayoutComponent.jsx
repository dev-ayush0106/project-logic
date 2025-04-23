import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const LayoutComponent = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default LayoutComponent
