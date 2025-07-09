import React from "react";

function UserPage() {
  return (
    <div className="flex min-h-screen bg-white text-[#191919]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#f9f9f9] p-6 border-r border-gray-200 flex flex-col justify-between">
        <div>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 font-semibold border-l-4 border-black bg-white px-3 py-2 rounded-md">
              <span>👤</span>
              Account Overview
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:text-black cursor-pointer">
              <span>📦</span>
              My Orders
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:text-black cursor-pointer">
              <span>❤️</span>
              Wishlist
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:text-black cursor-pointer">
              <span>📄</span>
              Addresses
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:text-black cursor-pointer">
              <span>⚙️</span>
              Account Settings
            </li>
          </ul>

          <div className="mt-10">
            <p className="font-semibold text-sm mb-2">Need Help?</p>
            <ul className="space-y-1 text-sm text-gray-500">
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <button className="text-sm font-semibold underline text-black hover:text-red-600">
            LOGOUT
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-2">Hello, Fatima</h1>
        <p className="text-gray-500 text-sm">Account Overview</p>
      </main>
    </div>
  );
}

export default UserPage;
