import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function MobileMenu({ categories, setIsOpen }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const cookies = new Cookies();
  const token = cookies.get("login-token");

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

  const handleTitleClick = () => {
    if (selectedCategory && selectedSubcategory) {
      // children səviyyəsində → subcategory datasına apar
      navigate(`/categories/subcategory/${selectedSubcategory.id}`);
      setIsOpen(false);
    } else if (selectedCategory && !selectedSubcategory) {
      // subcategory səviyyəsində → category datasına apar
      navigate(`/categories/${selectedCategory.id}`);
      setIsOpen(false);
    }
  };

  const handleChildClick = (child) => {
    navigate(`/categories/${selectedSubcategory?.id}/item/${child.id}`);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full bg-white z-50 overflow-y-auto scrollbar-hide">
      {/* Main Content */}
      <div className="flex-1 pb-6 text-[#181818]">
        {(selectedCategory || selectedSubcategory) && (
          <div className="flex items-cente justify-center gap-2 p-4 bg-[#9999991A] relative">
            <button
              onClick={handleBack}
              className="absolute left-4 cursor-pointer text-[16px] text-[#666] hover:text-black"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                data-bidi="true"
                id="icon"
              >
                <path fill="transparent" d="M0 0h24v24H0z" />
                <path
                  d="m15 18-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <h2
              onClick={handleTitleClick}
              className="cursor-pointer text-xl font-normal"
            >
              {currentTitle}
            </h2>
          </div>
        )}

        <div className="max-w-[470px] mx-auto px-5 tablet:px-6 pt-5">
          {/* Cari səviyyə üçün siyahı */}
          <ul className="divide-y divide-[#e5e7ea] ">
            {currentList?.map((item) => (
              <li key={item.id}>
                {selectedSubcategory ? (
                  // CHILDREN səviyyəsi üçün
                  <button
                    onClick={() => handleChildClick(item)}
                    className="cursor-pointer w-full flex items-center justify-between text-left py-2"
                  >
                    <span className="text-[18px] font-normal">
                      {item.categoryName}
                    </span>
                  </button>
                ) : (
                  // CATEGORY və ya SUBCATEGORY səviyyəsi üçün
                  <button
                    onClick={() => handleClick(item)}
                    className="cursor-pointer w-full flex items-center justify-between text-left py-2"
                  >
                    <span
                      className={`text-[18px] ${
                        !selectedCategory && !selectedSubcategory
                          ? "font-bold"
                          : "font-normal"
                      }`}
                    >
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
                )}
              </li>
            ))}
          </ul>

          {/* SUBCATEGORY QUICKLINKS BURADA */}
          {selectedCategory?.quickLinks?.length > 0 && !selectedSubcategory && (
            <div>
              <ul className="divide-y divide-[#e5e7ea] border-t border-[#e5e7ea] text-base font-normal">
                {selectedCategory.quickLinks.map((link, index) => (
                  <li key={index} className="py-2 cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Əlavə linklər yalnız ana səviyyədə */}
          {!selectedCategory && !selectedSubcategory && (
            <div className="mt-1">
              <ul className="divide-y divide-[#e5e7ea] text-base font-normal">
                <li
                  className="py-3 cursor-pointer"
                  onClick={() => {
                    navigate("/user");
                    setIsOpen(false);
                  }}
                >
                  My Account
                </li>
                <li className="py-3 cursor-pointer">Initiate Return</li>
                <li className="py-3 cursor-pointer">Order Status</li>
                <li className="py-3 cursor-pointer">Contact Us</li>
                <li
                  className="py-3 cursor-pointer"
                  onClick={() => {
                    if (token) {
                      window.location.href = "/wishlist";
                    } else {
                      window.location.href = "/login";
                    }
                  }}
                >
                  Wishlist
                </li>
                <li className="py-3 flex items-center justify-between cursor-pointer">
                  <span>Language</span>
                  <div className="flex items-center gap-2">
                    <span>EN</span>
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      id="icon"
                    >
                      <path
                        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z"
                        fill="#B22234"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.364 2A11.898 11.898 0 0 1 10.19.136V2h8.446a12.048 12.048 0 0 1 2.142 1.818H10.19v1.818h11.986c.36.575.674 1.183.933 1.819H10.19v1.818h13.5c.137.59.23 1.197.278 1.818H10.19v1.818h13.777c-.047.62-.14 1.228-.277 1.818H.311A11.927 11.927 0 0 1 0 12c0-1.609.316-3.144.89-4.545l.039-.092a11.951 11.951 0 0 1 2.353-3.61A12.133 12.133 0 0 1 5.364 2ZM.891 16.545h22.218a11.94 11.94 0 0 1-.933 1.819H1.824a12.022 12.022 0 0 1-.933-1.819Zm2.33 3.637h17.557A12.048 12.048 0 0 1 18.636 22H5.364a12.085 12.085 0 0 1-2.142-1.818Z"
                        fill="#fff"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.19.136a11.92 11.92 0 0 0-4.203 1.477l.09.277-.25-.183c-.498.3-.973.635-1.421 1.001l.154.475-.385-.281c-.443.381-.858.795-1.241 1.236l.11.337-.244-.18a11.995 11.995 0 0 0-1.938 3.23H.93l.166-.51.166.51h.534l-.431.317.166.51-.435-.318-.434.318.165-.51-.068-.05a11.95 11.95 0 0 0-.744 3.61H.28l-.275.2a12.218 12.218 0 0 0-.004.595l.01.032-.01-.007c.004.235.016.469.033.701H10.19V.136Z"
                        fill="#3C3B6E"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-2 py-6">
            <button
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
              className="cursor-pointer text-base text-white w-full bg-[#191919] hover:bg-[#3c4046] py-2 uppercase font-bold rounded-[2px]"
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("/create-account");
                setIsOpen(false);
              }}
              className="cursor-pointer text-base text-[#191919] border border-[#A1A8AF] hover:border-black w-full bg-white py-2 uppercase font-bold rounded-[2px]"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
