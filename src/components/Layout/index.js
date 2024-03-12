import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Layout = () => {
  const aboutSectionRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [location.pathname])

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <br />
      </div>
    </div>
  )
}
export default Layout
