import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchDetails({ setIsSearchOpen, products = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const bestSellers = products.filter((p) => p.badge === "Best").slice(0, 6);
  const newArrivals = products
    .filter(
      (p) =>
        p.badge?.toLowerCase() === "new" &&
        p.variations?.[0]?.productPrice?.price
    )
    .slice(0, 6);

  const filteredResults =
    searchQuery.trim() === ""
      ? []
      : products
          .filter((p) =>
            p.header?.toLowerCase().startsWith(searchQuery.toLowerCase())
          )
          .filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.id === item.id)
          );

  return (
    <div className="fixed inset-0 bg-white text-black z-[9999] font-ff-din flex flex-col">
      <div className="flex-shrink-0 flex items-center gap-1 tablet:gap-5 px-2 py-3 lg:p-10 bg-[#F6F7F8]">
        <div className="relative bg-white w-full max-w-[1296px] flex items-center border border-gray-400 rounded overflow-hidden focus-within:border-black focus-within:shadow-[0_0_0_2.5px_#777777] transition-all">
          <input
            type="text"
            placeholder="SEARCH PUMA.COM"
            className="w-full px-4 py-3 text-lg outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />

          <button
            onClick={() => {
              if (searchQuery.trim()) {
                const matchedProducts = products.filter((p) =>
                  p.header?.toLowerCase().startsWith(searchQuery.toLowerCase())
                );

                navigate("/search", {
                  state: {
                    products: matchedProducts,
                    query: searchQuery.trim(),
                  },
                });

                setIsSearchOpen(false);
              }
            }}
            className="absolute right-2 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#19191933]"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
            >
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
        </div>

        <button
          onClick={() => setIsSearchOpen(false)}
          className="p-2 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#19191933]"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path fill="transparent" d="M0 0h24v24H0z" />
            <path
              d="m10.586 12-5.293 5.293 1.414 1.414L12 13.414l5.293 5.293 1.414-1.414L13.414 12l5.293-5.293-1.414-1.414L12 10.586 6.707 5.293 5.293 6.707 10.586 12Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scroll px-3 md:px-6 lg:px-10 tablet:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-8">
          {/* Best Sellers */}
          <div className="col-span-1">
            <h3 className="text-[20px] text-[#191919] uppercase font-bold mb-4">
              Best Sellers
            </h3>
            <ul className="space-y-3">
              {bestSellers.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    setIsSearchOpen(false);
                  }}
                  className="cursor-pointer hover:underline text-base text-[#676D75] font-bold"
                >
                  {item.header}
                </li>
              ))}
            </ul>
          </div>

          {/* New Arrivals */}
          <div className="col-span-2">
            <h3 className="text-[20px] text-[#191919] uppercase font-bold mb-4">
              {searchQuery ? "Search Results" : "New Arrivals"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(searchQuery ? filteredResults : newArrivals).map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    setIsSearchOpen(false);
                  }}
                  className="group flex items-start gap-4 cursor-pointer tablet:p-3 rounded-md transition"
                >
                  <img
                    src={
                      item.image?.href ||
                      item.variations?.[0]?.preview ||
                      "no-image.jpg"
                    }
                    alt={item.header}
                    className="w-25"
                  />
                  <div className="flex flex-col justify-between">
                    <h4 className="text-base font-bold text-[#191919] leading-tight group-hover:underline">
                      {item.header}
                    </h4>
                    <p className="text-base text-[#676D75]">{item.subHeader}</p>
                    <p className="text-base text-[#191919] font-bold mt-1">
                      $
                      {item.variations?.[0]?.productPrice?.price?.toFixed(2) ||
                        "--"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDetails;
