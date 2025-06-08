import React from 'react'
import Navbar from './Navbar';
import RotatingBanner from './RotatingBanner';

function MobileMenu({ categories, setIsOpen }) {
  return (
    <div className='fixed inset-0 w-full h-screen bg-white text-black z-50'>
        <RotatingBanner />
        <Navbar theme="light" />
        <div className="border-t">
            azca
        </div>
    </div>
  )
}

export default MobileMenu