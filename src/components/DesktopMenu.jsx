import React from "react";
import { Link } from "react-router-dom";

function DesktopMenu({ categories, hoveredIndex, setHoveredIndex }) {
  return (
    <div
      className="absolute left-0 top-full w-full bg-white text-black shadow-xl z-50"
      onMouseEnter={() => setHoveredIndex(hoveredIndex)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="max-w-[1600px] mx-auto px-10 py-12 flex gap-8 font-ff-din">
        {/* QuickLinks */}
        {categories[hoveredIndex]?.quickLinks?.length > 0 && (
          <div className="w-1/5 min-w-48 flex flex-col space-y-1 text-lg">
            {categories[hoveredIndex].quickLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="block text-[#6C6C6C] font-bold text-[19px] hover:text-[#867454] leading-6 whitespace-normal"
              >
                {link}
              </a>
            ))}
          </div>
        )}

        {/* Subcategories */}
        {categories[hoveredIndex]?.subcategory?.map((group, i) => (
          <div key={i} className="w-1/5 min-w-[9.6rem] pr-5">
            <Link to={`/categories/${group.id}`}> 
              <h4 className="cursor-pointer font-bold text-lg mb-2 border-b-2 pb-1">
                <span className="text-[#181818] hover:text-[#867454]">
                  {group.categoryName}
                </span>
              </h4>
            </Link>

            {/* Əgər group.children varsa */}
            {group.children?.map((item, j) =>
              item.children ? (
                <div key={j} className="mb-4">
                  <Link to={`/categories/${item.id}`}>
                    <h5 className="font-bold cursor-pointer text-[#6C6C6C] hover:text-[#181818] text-base mb-1">
                      {item.categoryName}
                    </h5>
                  </Link>
                  {item.children.map((child, k) => (
                    <Link
                      key={k}
                      to={`/categories/${child.id}`}
                      className="block text-[#6C6C6C] hover:text-[#181818] text-base px-6 py-1/2"
                    >
                      {child.categoryName}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={j}
                  to={`/categories/${item.id}`} 
                  className="block text-[#6C6C6C] hover:text-[#181818] text-base py-1/2"
                >
                  {item.categoryName}
                </Link>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesktopMenu;
