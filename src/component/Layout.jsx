import React from 'react'
import { Footers } from './Footers'
import Header from './Header'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footers/>
    </>
  )
}

export default Layout
