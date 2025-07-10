import React, { useEffect, useState } from "react";

const trendingSearches = [
  "Chivas",
  "Speedcat",
  "Ballet",
  "Ferrari",
  "Palermo",
  "Hello Kitty",
];

function SearchDetails() {
  const [query, setQuery] = useState("");
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(stored);
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Search input */}
      <div className="max-w-4xl mx-auto mb-10">
        <input
          type="text"
          placeholder="SEARCH PUMA.COM"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Trending Searches */}
        <div>
          <h2 className="text-lg font-bold mb-4">TRENDING SEARCHES</h2>
          <ul className="space-y-2 text-gray-600">
            {trendingSearches.map((term, idx) => (
              <li key={idx} className="hover:underline cursor-pointer">
                {term}
              </li>
            ))}
          </ul>
        </div>

        {/* Recently Viewed */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-bold mb-4">RECENTLY VIEWED</h2>
          {recentlyViewed.length === 0 ? (
            <p className="text-gray-500">No items viewed recently.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {recentlyViewed.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border rounded-md p-2 hover:shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-black">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500">{item.category}</p>
                    <div className="text-sm font-semibold text-black">
                      ${item.price.toFixed(2)}
                      {item.oldPrice && (
                        <span className="text-gray-400 line-through ml-2 text-sm">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchDetails;
