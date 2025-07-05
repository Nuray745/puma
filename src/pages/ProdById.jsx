import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAllCategories, getProductsByCategoryId } from "../services/api";
import Card from "../components/Card";
import FilterSidebar from "../components/FilterSidebar";

function ProdById() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [count, setCount] = useState(8);
  const [isTwoColumns, setIsTwoColumns] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [sortOption, setSortOption] = useState("Sort By");
  const [filterOption, setFilterOption] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    getProductsByCategoryId(id).then((data) => {
      setAllProducts(data || []);
      setProducts(data || []); // ilk olaraq hamısını göstər
    });
  }, [id]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data || []);
    });
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleDropdownSelection = (option) => {
    if (option === "new" || option === "best") {
      setFilterOption(option);
      setSortOption(option === "new" ? "New" : "Best Sellers"); // ADD THIS LINE ✅
    } else {
      setSortOption(option);
      setFilterOption(""); // optional: clear any previous filter
    }
    setIsDropdownVisible(false);
  };

  const sortAndFilterProducts = (sortOption, filterOption) => {
    let sortedProducts = [...allProducts]; // Always sort/filter from original data

    if (sortOption === "Price Low to High") {
      sortedProducts.sort(
        (a, b) =>
          a.variations?.[0]?.productPrice?.price -
          b.variations?.[0]?.productPrice?.price
      );
    } else if (sortOption === "Price High to Low") {
      sortedProducts.sort(
        (a, b) =>
          b.variations?.[0]?.productPrice?.price -
          a.variations?.[0]?.productPrice?.price
      );
    }

    if (filterOption === "new") {
      sortedProducts = sortedProducts.filter(
        (product) => product.badge?.toLowerCase() === "new"
      );
    } else if (filterOption === "best") {
      sortedProducts = sortedProducts.filter(
        (product) => product.badge?.toLowerCase() === "best"
      );
    }

    setProducts(sortedProducts);
  };

  useEffect(() => {
    sortAndFilterProducts(sortOption, filterOption);
  }, [sortOption, filterOption, allProducts]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative">
      {isSidebarOpen && (
        <>
          <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-black opacity-30 z-70"
          />
          <FilterSidebar closeSidebar={closeSidebar} />
        </>
      )}
      <div className="border-b border-[#e5e7ea] py-4 tablet:py-8 px-2 tablet:px-4 desktop:px-8">
        <div>
          <div className="flex items-center gap-2 tablet:gap-3 text-xs tablet:text-base text-[#191919]">
            <Link to="/" className="font-bold hover:text-[#867454] transition">
              Home
            </Link>
            <div className="w-1 h-1 mt-1 rounded-full bg-[#8C9198]"></div>
            <div className="font-semibold"></div>
            {categories.find((item) => item.id == id)?.categoryName}
          </div>

          <div className="text-[24px] tablet:text-[32px] uppercase font-bold mt-4 tablet:mt-8">
            {categories.find((item) => item.id == id)?.categoryName}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4 px-2 tablet:px-4 desktop:px-8 py-3 tablet:py-5 border-b border-[#e5e7ea]">
        <button
          onClick={openSidebar}
          className="focus:border-black focus:ring-0 focus:outline-none focus:shadow-[0px_0px_0px_2.5px_#777777] active:border-black active:shadow-none transition-all ease-out duration-300 flex items-center bg-white text-black py-2 px-5 rounded-[2px] font-bold uppercase border border-[#A1A8AF] hover:border-black cursor-pointer"
        >
          Filters
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-2 w-5 h-5"
          >
            <path d="M6 4h2v6H6V8H3V6h3V4ZM10 8V6h11v2H10ZM14 14h2v6h-2v-2H3v-2h11v-2ZM18 18v-2h3v2h-3Z" />
          </svg>
        </button>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="focus:border-black focus:ring-0 focus:outline-none focus:shadow-[0px_0px_0px_2.5px_#777777] active:border-black active:shadow-none transition-all ease-out duration-300 flex items-center bg-white text-black py-2 px-5 rounded-[2px] font-bold uppercase border border-[#A1A8AF] hover:border-black cursor-pointer"
          >
            {sortOption}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2 w-5 h-5"
            >
              <path fill="transparent" d="M0 0h24v24H0z" />
              <path d="m18 9-6 6-6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          {isDropdownVisible && (
            <div className="absolute text-xs bg-white border border-[#e5e7ea] shadow-lg mt-1 py-2 px-2 w-full rounded-md z-10">
              <ul>
                <li
                  onClick={() => handleDropdownSelection("new")}
                  className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                >
                  New
                </li>
                <li
                  onClick={() => handleDropdownSelection("best")}
                  className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                >
                  Best Sellers
                </li>
                <li
                  onClick={() => handleDropdownSelection("Price Low to High")}
                  className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                >
                  Price Low to High
                </li>
                <li
                  onClick={() => handleDropdownSelection("Price High to Low")}
                  className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                >
                  Price High to Low
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-2 tablet:px-4 desktop:px-8 py-3 tablet:py-5">
        <div className="text-[20px] text-[#191919] font-bold">
          {products.length} <span className="uppercase">Products</span>
        </div>

        <div className="flex items-center gap-2">
          <div
            onClick={() => setIsTwoColumns(true)}
            className={`cursor-pointer ${isTwoColumns && "border"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 4.3a.3.3 0 0 1 .3-.3h10.367v10.667H4V4.3Zm3 7.367V7h4.667v4.667H7ZM4 17.333h10.667V28H4.3a.3.3 0 0 1-.3-.3V17.333Zm3 3h4.667V25H7v-4.667ZM17.333 4v10.667H28V4.3a.3.3 0 0 0-.3-.3H17.333ZM25 7h-4.667v4.667H25V7ZM17.333 17.333H28V27.7a.3.3 0 0 1-.3.3H17.333V17.333Zm3 3H25V25h-4.667v-4.667Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            onClick={() => setIsTwoColumns(false)}
            className={`cursor-pointer ${!isTwoColumns && "border"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              className="w-6 h-6"
            >
              <path
                d="M4 4.3a.3.3 0 0 1 .3-.3H8v4H4V4.3ZM4 10.667h4v4H4v-4ZM8 17.333H4v4h4v-4ZM4 24h4v4H4.3a.3.3 0 0 1-.3-.3V24ZM21.333 4h-4v4h4V4ZM17.333 10.667h4v4h-4v-4ZM21.333 17.333h-4v4h4v-4ZM17.333 24h4v4h-4v-4ZM14.667 4h-4v4h4V4ZM10.667 10.667h4v4h-4v-4ZM14.667 17.333h-4v4h4v-4ZM10.667 24h4v4h-4v-4ZM28 4.3a.3.3 0 0 0-.3-.3H24v4h4V4.3ZM24 10.667h4v4h-4v-4ZM28 17.333h-4v4h4v-4ZM24 24h4v3.7a.3.3 0 0 1-.3.3H24v-4Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={`grid ${
          isTwoColumns
            ? "grid-cols-1 tablet:grid-cols-2"
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        } gap-4 py-4 px-2 tablet:px-4 desktop:px-8`}
      >
        {products.length > 0 &&
          products.slice(0, count).map((product, i) => {
            const variation = product.variations ? product.variations[0] : {};
            const price = variation?.productPrice?.price || "N/A";

            return (
              <Link to={`/product/${product.id}`} key={i}>
                <Card
                  image={variation?.preview || "default-image-url"}
                  name={product.name || "No Name"}
                  subHeader={product.subHeader || "No Subheader"}
                  price={price}
                  label={
                    product.badge && {
                      text: variation?.badges?.[0]?.label || "",
                      color:
                        variation?.badges?.[0]?.id === "new"
                          ? "black"
                          : variation?.badges?.[0]?.id === "blue"
                          ? "blue"
                          : "",
                    }
                  }
                  colorCount={product.colors?.length || 1}
                  isAvailable={variation?.orderable}
                />
              </Link>
            );
          })}
      </div>

      <div className="px-2 tablet:px-4 desktop:px-8">
        {count < products.length && (
          <button
            onClick={() => setCount(count + 8)}
            className="bg-[#514d4d] hover:bg-[#6b6b6b] text-white w-full py-5 my-4 uppercase font-bold cursor-pointer"
          >
            Load More
          </button>
        )}
      </div>

      {products.length === 0 && (
        <p className="text-center my-3">No products found for this category.</p>
      )}
    </div>
  );
}

export default ProdById;
