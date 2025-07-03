import React from "react";

const Card = ({
  image,
  name,
  subHeader,
  price,
  description,
  label,
  colorCount,
  isAvailable,
}) => {
  const labelBgColor =
    label?.color === "black"
      ? "bg-[#191919]"
      : label?.color === "blue"
      ? "bg-[#0656B6]"
      : "";

  return (
    <div className="w-full flex flex-col gap-2 font-ff-din cursor-pointer">
      {/* Product Image */}
      <div className="w-full overflow-hidden flex items-center justify-center relative">
        <img src={image} alt={name} className="object-cover w-full h-full" />
        {!isAvailable && (
          <span
            data-test-id="product-list-item-badge"
            className="absolute bottom-5 left-0 uppercase text-xs font-bold bg-white px-2 py-0.5 border-puma-black border-l-2"
          >
            Coming Soon
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col px-3 py-4">
        <p className="text-xs text-[#6C6C6C] py-2">
          {colorCount} COLOR{colorCount > 1 ? "S" : ""}
        </p>
        <div className="flex justify-between gap-10 mt-2">
          <h2 className="text-base font-bold text-[#191919]">{name}</h2>
          <span className="text-base font-bold text-[#191919]">
            ${parseFloat(price).toFixed(2) || "N/A"}
          </span>
        </div>
        <p className="text-base text-[#676D75]">{subHeader}</p>
        <p className="text-base text-[#676D75]">{description}</p>
        {label?.text && (
          <span
            className={`inline-block mt-2 px-4 py-1 ${labelBgColor} text-white text-xs font-bold rounded-xs`}
          >
            {label.text}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
