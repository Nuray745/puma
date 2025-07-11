import React, { useState } from "react";

const filterData = [
  "Gender",
  "Age Group",
  "Category",
  "Price",
  "Style",
  "Size",
  "Color",
  "Sport",
];

function FilterSidebar({ closeSidebar }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="fixed flex flex-col top-0 left-0 w-full max-w-[450px] h-full bg-[#FAFAFA] z-100 shadow-md transition-transform duration-300 translate-x-0">
      {/* Header */}
      <div className="overflow-y-auto scrollbar-hide">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-[20px] font-bold text-black">Product Filters</h2>
          <button
            onClick={closeSidebar}
            className="p-2 cursor-pointer rounded-full hover:bg-[#d1d1d1]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="m10.586 12-5.293 5.293 1.414 1.414L12 13.414l5.293 5.293 1.414-1.414L13.414 12l5.293-5.293-1.414-1.414L12 10.586 6.707 5.293 5.293 6.707 10.586 12Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 px-6">
          {filterData.map((filter, index) => (
            <div key={index}>
              <button
                className="cursor-pointer flex justify-between border-b border-gray-200 items-center w-full py-4 text-left text-[18px] text-[#181818]"
                onClick={() => toggleSection(filter)}
              >
                <span>{filter}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  id="icon"
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openSection === filter ? "rotate-180" : ""
                  }`}
                >
                  <path fill="transparent" d="M0 0h24v24H0z" />
                  <path
                    d="m18 9-6 6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              {openSection === filter && (
                <div className="px-6 py-2 text-sm text-gray-600">
                  <p>Options for {filter}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-4 pt-8 bg-white">
        <button className="cursor-pointer w-full bg-[#191919] text-white py-3 px-6 text-[18px] font-bold tracking-wide hover:bg-[#3c4046]">
          SHOW 1607 PRODUCTS
        </button>
      </div>
    </div>
  );
}

export default FilterSidebar;
