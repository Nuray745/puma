import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Landing() {
  return (
 <div className='font-ff-din'>
   <Header/>
   <Outlet/>
   <Footer/>
 </div>
  )
}

export default Landing