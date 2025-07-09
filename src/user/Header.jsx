import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Neptun
        </div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Ana Səhifə</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Məhsullar</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Haqqımızda</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Əlaqə</a>
        </nav>

        {/* Login / Basket */}
        <div className="space-x-4 flex items-center">
          <button className="text-sm text-blue-600 hover:underline">Daxil ol</button>
          <button className="relative">
            <svg className="w-6 h-6 text-gray-700 hover:text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-1.6 8h13.2L17 13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
