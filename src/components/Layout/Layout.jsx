import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
  return <>
    <Sidebar/>
    <div className="container py-5  ">
    <Outlet></Outlet>
    </div>
  </>
}

export default Layout