import React, { useState } from "react";

function FilterSidebar({ closeSidebar }) {
  const [isOpen, setIsOpen] = useState(true); // Sidebar initially open

  // Handle filter selection (for now, just log the selected filter)
  const handleFilterSelection = (option) => {
    console.log(option);
  };

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 w-[300px] bg-white shadow-md h-full transition-all duration-300 z-50`}
    >
      <div className="flex justify-between items-center p-6 border-b border-[#e5e7ea]">
        <h2 className="text-[20px] text-[#191919] font-bold">
          Product Filters
        </h2>

        <button
          onClick={() => closeSidebar()}
          className="text-lg rounded-full hover:bg-gray-200 p-2 cursor-pointer" // Burada bg- dəyişdirə bilərsiniz
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            id="icon"
            className="w-6 h-6"
          >
            <path fill="transparent" d="M0 0h24v24H0z" />
            <path
              d="m10.586 12-5.293 5.293 1.414 1.414L12 13.414l5.293 5.293 1.414-1.414L13.414 12l5.293-5.293-1.414-1.414L12 10.586 6.707 5.293 5.293 6.707 10.586 12Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="px-4 py-2">
        <div>
          <h3 className="font-bold">Gender</h3>
          <ul>
            <li
              onClick={() => handleFilterSelection("male")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              Male
            </li>
            <li
              onClick={() => handleFilterSelection("female")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              Female
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mt-4">Age Group</h3>
          <ul>
            <li
              onClick={() => handleFilterSelection("kids")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              Kids
            </li>
            <li
              onClick={() => handleFilterSelection("adult")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              Adult
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mt-4">Category</h3>
          <ul>
            <li
              onClick={() => handleFilterSelection("clothing")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              Clothing
            </li>
            <li
              onClick={() => handleFilterSelection("footwear")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              Footwear
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mt-4">Price</h3>
          <ul>
            <li
              onClick={() => handleFilterSelection("lowToHigh")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              Price Low to High
            </li>
            <li
              onClick={() => handleFilterSelection("highToLow")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              Price High to Low
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mt-4">Size</h3>
          <ul>
            <li
              onClick={() => handleFilterSelection("S")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              S
            </li>
            <li
              onClick={() => handleFilterSelection("M")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              M
            </li>
            <li
              onClick={() => handleFilterSelection("L")}
              className="cursor-pointer hover:bg-gray-100 py-1"
            >
              L
            </li>
          </ul>
        </div>

        <button className="bg-blue-500 text-white py-2 w-full mt-4">
          Show Products
        </button>
      </div>
    </div>
  );
}

export default FilterSidebar;
