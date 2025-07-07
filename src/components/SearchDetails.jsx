import React from "react";

function SearchDetails({ setIsSearchOpen }) {
  return (
    <div className="fixed inset-0 bg-white text-black z-[9999] font-ff-din">
      <div className="flex items-center gap-20 p-10 bg-[#F6F7F8] relative">
        {/* SEARCH BOX */}
        <div
          className="cursor-pointer bg-white relative w-full max-w-[1296px] flex items-center border border-gray-400 rounded overflow-hidden
          focus-within:border-black focus-within:shadow-[0px_0px_0px_2.5px_#777777] transition-all duration-300 ease-out"
        >
          <input
            type="text"
            placeholder="SEARCH PUMA.COM"
            className="w-full px-4 py-3 text-lg outline-none"
            autoFocus
          />
          {/* Search icon */}
          <button
            aria-label="Search"
            className="cursor-pointer flex items-center justify-center hover:bg-[#19191933] rounded-full w-10 h-10 mr-2"
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
        </div>

        {/* X close icon */}
        <button
          onClick={() => setIsSearchOpen(false)}
          className="absolute right-10 text-xl font-bold hover:bg-[#19191933] cursor-pointer rounded-full w-10 h-10"
        >
          ✕
        </button>
      </div>
      <div className="grid grid-cols-3 py-8 px-10">
        <div className="col-span-1">
          <h3 className="text-[20px] text-[#191919] uppercase font-bold">Trending Searches</h3>
        </div>
        <div className="col-span-2">
          <h3 className="text-[20px] text-[#191919] uppercase font-bold">Recently Viewed</h3>

        </div>
      </div>
    </div>
  );
}

export default SearchDetails;
