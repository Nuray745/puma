import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMatchMedia } from "../hooks/use-matchwidth";
import DesktopMenu from "./DesktopMenu";
import { getAllCategories, getAllProducts } from "../services/api";
import SearchDetails from "./SearchDetails";
import { Cookies } from "react-cookie";
import { useContext } from "react";
import { BASKET } from "../contexts/BasketContext";

function Navbar({ theme = "dark", isOpen, setIsOpen }) {
  const isDark = theme === "dark";
  const isBelow1100 = useMatchMedia("(max-width: 1099px)");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("login-token");
  const [products, setProducts] = useState([]);
  const { basket } = useContext(BASKET);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    console.log("isOpen dəyişdi:", isOpen);
  }, [isOpen]);

  return (
    <div
      className={`sticky top-0 z-50 ${
        isDark ? "bg-[#181818] text-white" : "bg-white text-black"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto h-16 lg:h-20 px-4 tablet:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          {/* Menu and Search */}
          <div className="flex items-center gap-2">
            {/* Menyu - yalnız 1100px aşağıda görünür */}
            {isBelow1100 && (
              <button
                aria-label="Menu"
                onClick={() => setIsOpen(!isOpen)}
                className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${
                  isDark ? "hover:bg-[#404040]" : "hover:bg-[#3B404733]"
                }`}
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    id="icon"
                  >
                    <path fill="transparent" d="M0 0h24v24H0z" />
                    <path
                      d="m10.586 12-5.293 5.293 1.414 1.414L12 13.414l5.293 5.293 1.414-1.414L13.414 12l5.293-5.293-1.414-1.414L12 10.586 6.707 5.293 5.293 6.707 10.586 12Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    id="icon"
                  >
                    <path fill="transparent" d="M0 0h24v24H0z" />
                    <path
                      d="M2 7V5h20v2H2Zm0 6h20v-2H2v2Zm0 6h20v-2H2v2Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </button>
            )}

            {/* Axtarış - yalnız 1100px aşağıda sola qoyulur */}
            {isBelow1100 && (
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${
                  isDark ? "hover:bg-[#404040]" : "hover:bg-[#3B404733]"
                } transition-colors`}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  id="icon"
                >
                  <path fill="transparent" d="M0 0h24v24H0z" />
                  <path d="m19 19-4-4" stroke="currentColor" strokeWidth="2" />
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Logo */}
          <div
            className={`${
              isBelow1100 ? "absolute left-1/2 -translate-x-1/2" : ""
            }`}
          >
            <Link to="/" onClick={() => setIsOpen(false)}>
              <svg
                className={` ${
                  isBelow1100 ? "w-10 h-10" : "w-8 h-8"
                } cursor-pointer`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 37"
                fill="none"
                id="icon"
              >
                <path
                  fill="currentColor"
                  d="M47.689.517c-.834-1.066-2.291-.213-2.933.16-4.569 2.692-5.243 7.432-6.834 10.154-1.253 2.178-3.304 3.779-5.159 3.903-1.373.098-2.861-.167-4.338-.81-3.613-1.562-5.56-3.583-6.034-3.94-.973-.739-8.459-8.03-14.559-8.327 0 0-.744-1.5-.93-1.526C6.457.08 6 1.033 5.669 1.133c-.3.105-.825-1.024-1.13-.975C4.233.2 3.936 1.33 3.34 1.913c-.439.425-.973.398-1.275.926-.104.192-.068.53-.186.84-.253.641-1.102.708-1.11 1.394 0 .762.714.907 1.338 1.438.496.425.53.725 1.109.924.515.176 1.264-.374 1.928-.177.553.163 1.085.279 1.204.846.108.513 0 1.316-.682 1.226-.222-.03-1.194-.348-2.395-.22-1.45.154-3.105.618-3.267 2.22-.083.895 1.028 1.942 2.11 1.733.742-.143.392-1.013.797-1.433.535-.541 3.545 1.888 6.344 1.888 1.186 0 2.063-.3 2.935-1.21.078-.057.185-.203.31-.218.113.015.324.128.39.175 2.262 1.793 3.967 5.399 12.26 5.441 1.164.014 2.498.558 3.591 1.553.96.866 1.528 2.251 2.075 3.65.836 2.106 2.322 4.139 4.584 6.407.119.135 1.98 1.561 2.119 1.666.025.021.168.334.106.51-.039 1.38-.245 5.34 2.731 5.506.731.04.549-.463.549-.82-.01-.683-.129-1.371.226-2.08.507-.957-1.051-1.418-1.017-3.513.037-1.567-1.291-1.302-1.969-2.498-.381-.687-.736-1.065-.699-1.894.145-4.76-1.034-7.896-1.61-8.654-.455-.587-.847-.806-.414-1.078 2.481-1.632 3.05-3.15 3.05-3.15 1.32-3.081 2.512-5.89 4.15-7.138.332-.241 1.177-.88 1.703-1.12 1.527-.725 2.346-1.156 2.777-1.576.711-.675 1.27-2.107.588-2.96h-.001z"
                />
              </svg>
            </Link>
          </div>

          {/* Menyu - desktop */}
          {!isBelow1100 && (
            <ul className="flex font-semibold text-base ml-5">
              {categories.map((item, index) => (
                <li
                  key={item.id}
                  className="px-4 cursor-pointer h-20 flex items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    to={`/categories/${item.id}`}
                    className={`relative py-1 border-b-2 transition-all text-white ${
                      hoveredIndex == index
                        ? "border-[#867454] opacity-100"
                        : hoveredIndex !== null
                        ? "border-transparent opacity-50"
                        : "border-transparent opacity-100"
                    }`}
                  >
                    {item.categoryName}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {!isBelow1100 && hoveredIndex !== null && (
            <div className="absolute left-0 top-full w-full z-50">
              <DesktopMenu
                categories={categories}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            </div>
          )}
        </div>

        {/* İkonlar */}
        <div
          className={`font-ff-din-exp flex gap-2 items-center ${
            isDark ? "text-white" : "text-black"
          } text-xl cursor-pointer 
                ${isBelow1100 && "flex-row-reverse"}
            `}
        >
          {/* Axtarış */}
          {!isBelow1100 && (
            <div
              className={`flex items-center ${
                isDark ? "text-white" : "text-black"
              } text-xl cursor-pointer`}
            >
              {/* Search button (icon only - 1280px aşağıda görünür) */}
              <div className="flex xl:hidden">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search"
                  className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${
                    isDark ? "hover:bg-[#404040]" : "hover:bg-[#3B404733]"
                  } transition-colors`}
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    id="icon"
                  >
                    <path fill="transparent" d="M0 0h24v24H0z" />
                    <path
                      d="m19 19-4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>

              {/* Search button + text (1280px yuxarıda görünür) */}
              <div
                onClick={() => setIsSearchOpen(true)}
                className="hidden xl:flex items-center justify-center border border-[#676d75] hover:border-white rounded-[2px] px-4 mx-3 h-10"
              >
                <button
                  aria-label="Search"
                  className="flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    id="icon"
                  >
                    <path fill="transparent" d="M0 0h24v24H0z" />
                    <path
                      d="m19 19-4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <div className="opacity-100 relative font-bold uppercase text-base px-2">
                  Search
                </div>
              </div>
            </div>
          )}

          {isSearchOpen && (
            <SearchDetails
              setIsSearchOpen={setIsSearchOpen}
              products={products}
            />
          )}

          {/* Ürək */}
          {!isBelow1100 && (
            <button
              onClick={() => {
                if (token) {
                  window.location.href = "/wishlist";
                } else {
                  window.location.href = "/login";
                }
              }}
              aria-label="Favorites"
              className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${
                isDark ? "hover:bg-[#404040]" : "hover:bg-red"
              } transition-colors`}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                id="icon"
              >
                <path fill="transparent" d="M0 0h24v24H0z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.32 7.36c-1.26-1.868-3.813-1.804-4.99.147l-.473.787h-1.713l-.475-.787C9.493 5.556 6.941 5.492 5.68 7.36c-1.044 1.547-.863 3.697.395 5.01L12 18.555l5.926-6.186c1.258-1.313 1.439-3.463.394-5.01ZM12 5.92c-2.069-2.64-6.02-2.58-7.978.32-1.561 2.312-1.314 5.507.607 7.513L12 21.445l7.37-7.692c1.922-2.006 2.17-5.2.608-7.513-1.958-2.9-5.91-2.96-7.978-.32Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          )}

          {/* Səbət */}
          <Link
            to={"/basket"}
            aria-label="Cart"
            className={`relative cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${
              isDark ? "hover:bg-[#404040]" : "hover:bg-[#3B404733]"
            } transition-colors`}
          >
            {/* İkon */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              id="icon"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.333 3.333H2.77l1.21 7.277c.07.418.431.724.855.724h6.669a.867.867 0 0 0 .847-.685l1.14-5.315H4.453L3.898 2H1.333v1.333ZM5.231 10l-.555-3.333h7.166L11.128 10H5.23Z"
                clipRule="evenodd"
              />
              <path fill="currentColor" d="M12 12.667H4.667V14H12v-1.333Z" />
            </svg>

            {/* Say göstəricisi (badge) */}
            {basket.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[rgb(172,30,30)] text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {basket.length}
              </span>
            )}
          </Link>

          {/* İstifadəçi */}
          <Link
            to={token ? "/user" : "/login"}
            aria-label="User profile"
            className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${
              isDark ? "hover:bg-[#404040]" : "hover:bg-[#3B404733]"
            } transition-colors`}
          >
            <svg
              className="w-6 h-6"
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
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
