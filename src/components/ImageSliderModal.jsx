import React from "react";

function ImageSliderModal({ images, currentIndex, onClose, setCurrentIndex }) {
  if (!images?.length) return null;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-[99999]">
      <button
        onClick={onClose}
        className="w-10 h-10 cursor-pointer absolute top-5 right-5 text-black hover:bg-[#19191933] rounded-full text-xl font-bold z-50"
      >
        ✕
      </button>

      <button
        onClick={goPrev}
        className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-[#3c4046] text-white absolute left-4 pb-1 text-2xl z-50"
      >
        ‹
      </button>

      <img
        src={images[currentIndex]}
        alt="slider"
        className="max-w-[90vw] max-h-screen object-contain"
      />

      <button
        onClick={goNext}
        className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-[#3c4046] text-white absolute right-4 pb-1 text-2xl z-50"
      >
        ›
      </button>
    </div>
  );
}

export default ImageSliderModal;
