import React, { useState } from "react";
import Navbar from "./Navbar";
import RotatingBanner from "./RotatingBanner";

function MobileMenu({ categories, setIsOpen }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null); // children-dən subcategory-yə qayıt
    } else if (selectedCategory) {
      setSelectedCategory(null); // subcategory-dən ana category-yə qayıt
    }
  };

  // Göstəriləcək siyahı (hal-hazırda hansı səviyyədəyik)
  const currentList = selectedSubcategory
    ? selectedSubcategory.children
    : selectedCategory
    ? selectedCategory.subcategory
    : categories;

  const currentTitle = selectedSubcategory
    ? selectedSubcategory.categoryName
    : selectedCategory
    ? selectedCategory.categoryName
    : null;

  const handleClick = (item) => {
    if (item.subcategory) {
      setSelectedCategory(item);
    } else if (item.children) {
      setSelectedSubcategory(item);
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto scrollbar-hide">
      {/* Fixed Header */}
      <div className="fixed w-full border-b border-[#e5e7ea] bg-white z-50">
        <RotatingBanner />
        <Navbar theme="light" />
      </div>

      {/* Main Content */}
      <div className="max-w-[470px] mx-auto pt-[120px] pb-6 text-[#181818] px-6">
        {/* Geri düyməsi və başlıq */}
        {(selectedCategory || selectedSubcategory) && (
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={handleBack}
              className="text-[16px] text-[#666] hover:text-black"
            >
              ← Back
            </button>
            <h2 className="text-xl font-bold">{currentTitle}</h2>
          </div>
        )}

        {/* Cari səviyyə üçün siyahı */}
        <ul className="divide-y divide-[#e5e7ea]">
          {currentList?.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item)}
                className="cursor-pointer w-full flex items-center justify-between text-left py-3"
              >
                <span className="font-bold text-[18px]">
                  {item.categoryName}
                </span>
                {(item.subcategory || item.children) && (
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path fill="transparent" d="M0 0h24v24H0z" />
                    <path
                      d="m9 6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Əlavə linklər yalnız ana səviyyədə */}
        {!selectedCategory && !selectedSubcategory && (
          <>
            <div className="mt-4">
              <ul className="divide-y divide-[#e5e7ea] text-base font-normal">
                {[
                  "My Account",
                  "Initiate Return",
                  "Order Status",
                  "Contact Us",
                  "Wishlist",
                ].map((item, index) => (
                  <li key={index} className="py-3 cursor-pointer">
                    {item}
                  </li>
                ))}
                <li className="py-3 flex items-center justify-between cursor-pointer">
                  <span>Language</span>
                  <div className="flex items-center gap-2">
                    <span>EN</span>
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z"
                        fill="#B22234"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 py-6">
              <button className="text-base text-white w-full bg-[#191919] hover:bg-[#3c4046] py-2 uppercase font-bold rounded-[2px]">
                Login
              </button>
              <button className="text-base text-[#191919] border border-[#A1A8AF] hover:border-black w-full bg-white py-2 uppercase font-bold rounded-[2px]">
                Join Us
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
