import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="col-span-4 lg:col-span-2">
      {/* Böyük şəkil */}
      <div className="w-full aspect-square mb-4">
        <img
          src={images[currentImageIndex] || "default-image-url"}
          alt={`product-main`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Thumbnail scroll – horizontal */}
      <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img || "default-image-url"}
            alt={`thumbnail-${idx}`}
            onClick={() => setCurrentImageIndex(idx)}
            className={`h-20 w-20 rounded-md object-cover cursor-pointer border-2 ${
              currentImageIndex === idx ? "border-[#191919]" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
