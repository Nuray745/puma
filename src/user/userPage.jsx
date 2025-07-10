import React from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    cookies.remove("login-token");
    navigate("/login");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white text-[#191919]">
      {/* Sidebar */}
      <aside className="order-2 w-full lg:max-w-84 bg-[#F6F7F8] pb-10 tablet:py-[30px] lg:py-[56px] tablet:pr-6 lg:pr-12 tablet:pl-6 lg:pl-8 flex flex-col justify-between">
        <div>
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-3 font-semibold border-l-2 border-black bg-white hover:bg-[#dfe0e1] cursor-pointer px-4 py-4">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="icon"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm3 4H9a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3Zm-6-2a5 5 0 0 0-5 5v3.7a.3.3 0 0 0 .3.3h15.4a.3.3 0 0 0 .3-.3V17a5 5 0 0 0-5-5H9Z"
                  clipRule="evenodd"
                />
              </svg>
              Account Overview
            </li>
            <li className="flex items-center gap-3 font-semibold px-4 py-4 hover:bg-[#dfe0e1] cursor-pointer">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="icon"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm3 4H9a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3Zm-6-2a5 5 0 0 0-5 5v3.7a.3.3 0 0 0 .3.3h15.4a.3.3 0 0 0 .3-.3V17a5 5 0 0 0-5-5H9Z"
                  clipRule="evenodd"
                />
              </svg>
              My Orders
            </li>
            <li className="flex items-center gap-3 font-semibold px-4 py-4 hover:bg-[#dfe0e1] cursor-pointer">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="icon"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm3 4H9a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3Zm-6-2a5 5 0 0 0-5 5v3.7a.3.3 0 0 0 .3.3h15.4a.3.3 0 0 0 .3-.3V17a5 5 0 0 0-5-5H9Z"
                  clipRule="evenodd"
                />
              </svg>
              Wishlist
            </li>
            <li className="flex items-center gap-3 font-semibold px-4 py-4 hover:bg-[#dfe0e1] cursor-pointer">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="icon"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm3 4H9a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3Zm-6-2a5 5 0 0 0-5 5v3.7a.3.3 0 0 0 .3.3h15.4a.3.3 0 0 0 .3-.3V17a5 5 0 0 0-5-5H9Z"
                  clipRule="evenodd"
                />
              </svg>
              Addresses
            </li>
            <li className="flex items-center gap-3 font-semibold px-4 py-4 hover:bg-[#dfe0e1] cursor-pointer">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="icon"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm3 4H9a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3Zm-6-2a5 5 0 0 0-5 5v3.7a.3.3 0 0 0 .3.3h15.4a.3.3 0 0 0 .3-.3V17a5 5 0 0 0-5-5H9Z"
                  clipRule="evenodd"
                />
              </svg>
              Account Settings
            </li>
          </ul>

          <div className="mt-6 px-4 lg:px-0">
            <p className="font-semibold text-[18px] mb-2">Need Help?</p>
            <ul className="space-y-2 text-base text-[#676D75]">
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 px-4 lg:px-0  ">
          <button
            onClick={handleLogout}
            className="text-sm font-bold border-b-2 border-[#191919] text-[#191919] cursor-pointer"
          >
            LOGOUT
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="order-1 w-full pt-6 lg:pt-16 pr-6 lg:pr-8 pb-6 pl-6 lg:pl-12">
        <h1 className="text-[28px] lg:text-[40px] text-[#191919] font-bold">Hello, Fatima</h1>
        <p className="text-[16px] lg:text-[18px] text-[#191919]">Account Overview</p>
      </main>
    </div>
  );
}

export default UserPage;
