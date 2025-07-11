import React, { useState } from "react";

function EditItemModal({ item, sizes, onClose, onUpdate }) {
  const [selectedSize, setSelectedSize] = useState(item.size);

  return (
    <div className="fixed inset-0 bg-black/40 z-100 flex items-center justify-center p-2 tablet:p-4 desktop:p-6">
      <div className="bg-white w-full max-w-md rounded p-6 relative">
        <div className="flex items-center justify-between pb-2">
          <p className="text-base text-[#6C6C6C]">#{item.id}</p>
          <button
            onClick={onClose}
            className="hover:bg-[#3B404733] rounded-full p-1 cursor-pointer"
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
                d="m10.586 12-5.293 5.293 1.414 1.414L12 13.414l5.293 5.293 1.414-1.414L13.414 12l5.293-5.293-1.414-1.414L12 10.586 6.707 5.293 5.293 6.707 10.586 12Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-[20px] tablet:text-[28px] text-[#191919] font-bold">
          {item.name}
        </h2>
        <p className="text-sm tablet:text-base pt-2 text-[#181818] mb-4">
          {item.color}
        </p>

        <div className="grid-cols-6">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover aspect-square mb-4"
          />
        </div>

        <div className="flex flex-wrap gap-1 border-t border-[#DFE0E1] pt-6">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`cursor-pointer border aspect-square min-w-15 rounded text-sm ${
                selectedSize === size
                  ? "bg-black text-white font-bold"
                  : "bg-white text-[#191919] border-[#DFE0E1]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            onUpdate(item.id, selectedSize);
            onClose();
          }}
          className="cursor-pointer mt-6 w-full bg-[#191919] hover:bg-[#3c4046] text-white py-4 font-bold text-base rounded"
        >
          UPDATE ITEM
        </button>
      </div>
    </div>
  );
}

export default EditItemModal;
