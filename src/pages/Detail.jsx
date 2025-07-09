import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import Slider from "../components/Slider";
import ImageSliderModal from "../components/ImageSliderModal";
import { useContext } from "react";
import { BASKET } from "../contexts/BasketContext";
import { WISHLIST } from "../contexts/WishlistContext";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToBasket } = useContext(BASKET);
  const { addToWishlist } = useContext(WISHLIST);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product) return <p className="text-center my-10">Loading...</p>;
  if (!product?.id) return <NotFound />;

  // Seçilmiş variasiyanı götür
  const variation = product.variations?.[selectedColorIndex] || {};
  const price = variation?.productPrice?.price || "N/A";
  const images = variation.images?.map((img) => img.href) || [
    variation.preview,
  ];
  const sizeList =
    product.productMeasurements?.metric?.slice(1)?.map(
      (row) => row[0] // Yəni: "XS", "S", "M", "L", ...
    ) || [];
  const sizeRows = product.productMeasurements?.metric?.slice(1) || []; // başlığı atmırıq

  return (
    <div className="px-4 desktop:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Şəkil qalereyası */}
      {/* Şəkil qalereyası */}
      <div className="grid grid-cols-2 gap-4 col-span-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img || "default-image-url"}
            alt={`product-${idx}`}
            className="w-full aspect-square object-cover cursor-pointer"
            onClick={() => {
              setCurrentImageIndex(idx);
              setIsSliderOpen(true);
            }}
          />
        ))}
      </div>

      {isSliderOpen && (
        <ImageSliderModal
          images={images}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
          onClose={() => setIsSliderOpen(false)}
        />
      )}

      {/* Məhsul məlumatları */}
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[32px] text-[#191919] font-bold">
            {product.header}
          </h1>
          <p className="text-[18px] text-[#676D75] font-normal">
            {product.subHeader}
          </p>
        </div>

        {product.badge && (
          <span
            className={`text-xs text-white uppercase font-bold px-4 py-1 w-fit rounded-xs ${
              product.badge.toLowerCase() === "new"
                ? "bg-[#191919]"
                : product.badge.toLowerCase() === "best"
                ? "bg-[#0656B6]"
                : "bg-gray-500"
            }`}
          >
            {product.badge}
          </span>
        )}

        <div className="text-[24px] font-bold">
          ${typeof price === "number" ? price.toFixed(2) : price}
        </div>

        {price && typeof price === "number" && (
          <div className="flex items-center flex-row text-xs">
            <span className="flex items-center flex-row">
              Or 4 payments of ${(price / 4).toFixed(2)} by{" "}
              <button
                type="button"
                className="cursor-pointer h-6 px-1.5 py-[9px] border-2 border-[#DFE0E1] hover:border-[#8C9198] rounded-sm flex items-center mx-1"
              >
                Afterpay
              </button>
              or{" "}
              <button
                type="button"
                className="cursor-pointer h-6 px-1 py-[9px] border-2 border-[#DFE0E1] hover:border-[#8C9198] rounded-sm flex items-center mx-1"
              >
                Klarna
              </button>
            </span>
          </div>
        )}

        {/* Rəng seçimi */}
        {product.colors?.length > 0 && (
          <div>
            <p className="text-[20px] font-bold mb-1">Color:</p>
            <p className="text-[14px] mb-3 font-normal">
              {product.colors[selectedColorIndex]?.name}
            </p>

            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color, idx) => {
                const colorVariation = product.variations?.[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedColorIndex(idx)}
                    className={`w-15 h-15 overflow-hidden cursor-pointer ${
                      idx === selectedColorIndex ? "border-1 border-black" : ""
                    }`}
                  >
                    <img
                      src={colorVariation?.preview || "default-color-image.jpg"}
                      alt={color.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {product.variations?.[0]?.modelMeasurementText && (
          <div className="bg-gray-100 p-4 rounded flex items-start gap-2 mt-4">
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
                d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 10v8h-2v-8h2Zm0-4v2h-2V6h2Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-base text-[#191919]">
              {product.variations[0].modelMeasurementText}
            </p>
          </div>
        )}

        {/* Ölçü seçimləri */}
        {sizeRows.length > 0 && (
          <div className="pt-4 border-t border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[20px] font-bold">Size</p>
              {selectedSize &&
                (() => {
                  const selectedRow = sizeRows.find(
                    (row) => row[0] === selectedSize
                  );
                  const selectedStock =
                    parseInt(selectedRow?.[selectedRow.length - 1], 10) || 0;

                  return selectedStock > 0 && selectedStock <= 5 ? (
                    <p className="text-xs text-[#191919] font-bold uppercase">
                      Only {selectedStock} left
                    </p>
                  ) : (
                    <p className="text-xs text-[#191919] font-bold uppercase">
                      in stock
                    </p>
                  );
                })()}
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {sizeRows.map((row) => {
                const size = row[0];
                const stock = parseInt(row[row.length - 1], 10) || 0;

                const isAvailable = stock > 0;

                return (
                  <button
                    key={size}
                    onClick={() => isAvailable && setSelectedSize(size)}
                    disabled={!isAvailable}
                    className={`w-15 h-15 cursor-pointer border border-[#e5e7eb] rounded px-4 py-2 text-sm font-normal
                      ${selectedSize === size && "bg-black text-white"}
                      ${
                        !isAvailable &&
                        "bg-gray-100 text-[#6c6c6c] cursor-not-allowed"
                      }
                    `}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Əlavə düymələr */}
        <div className="flex flex-col gap-2 pt-4 border-t border-[#e5e7eb]">
          <div className="flex gap-2">
            <button
              onClick={() => addToWishlist(product, selectedColorIndex, selectedSize)}
              className="cursor-pointer px-6 py-3 border border-[#A1A8AF] hover:border-black rounded-[2px]"
            >
              <svg
                className="w-8 h-8"
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
            <button
              className="cursor-pointer w-full bg-[#191919] hover:bg-[#3c4046] text-white py-3 font-bold uppercase rounded-[2px]"
              onClick={() =>
                addToBasket(product, selectedColorIndex, selectedSize)
              }
            >
              Add to Cart
            </button>
          </div>
          <button className="cursor-pointer border border-[#A1A8AF] hover:border-black py-3 font-bold uppercase text-[18px] rounded-[2px]">
            Explore All
          </button>
        </div>

        <div className="py-4 space-y-3">
          {/* Shipping Message */}
          <div className="text-base text-[#4D7D04] font-bold flex items-center gap-2">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path fill="transparent" d="M0 0h24v24H0z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8h10v8h-3.268a2 2 0 0 0-3.464 0H6v-1H4v3h3.268a2 2 0 0 0 3.464 0h5.536a2 2 0 0 0 3.464 0H22v-5.333L19.6 10H16V6H4v2Zm14 7a2 2 0 0 0-1.732 1H16v-4h2.71L20 13.434V16h-.268A2 2 0 0 0 18 15Zm0 2.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM9.667 17a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z"
                fill="currentColor"
              />
              <path d="M10 10H3v1h7v-1Zm-8 2h7v1H2v-1Z" fill="currentColor" />
            </svg>
            <p>This item qualifies for free shipping!</p>
          </div>

          {/* Return Message */}
          <div className="text-base text-[#676D75] font-bold flex items-center gap-2">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path fill="transparent" d="M0 0h24v24H0z" />
              <path d="m21 12-3 3-3-3" stroke="currentColor" strokeWidth="2" />
              <path
                d="M17.71 14a6.953 6.953 0 0 0 .29-2 7 7 0 1 0-5 6.71"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <p>Free returns on all qualifying orders.</p>
          </div>
        </div>

        {/* Təsvir */}
        <div>
          <h3 className="text-[20px] font-bold mb-2">Description</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          />
        </div>
      </div>

      <div className="col-span-4">
        <div className="uppercase text-[24px] text-[#191919] pb-4 font-bold">
          Newest Products
        </div>
        <Slider data="new" />
      </div>

      <div className="col-span-4">
        <div className="uppercase text-[24px] text-[#191919] pb-4 font-bold">
          Best of the best
        </div>
        <Slider data="best" />
      </div>

      {/* PRODUCT STORY, MATERIAL və CARE INFO bölməsi */}
      {product.productStory && (
        <section className="col-span-4 rounded-md bg-[#f5f5f5] px-4 sm:px-8 py-10 text-sm text-[#191919] space-y-6">
          {/* product.description düz mətin kimi render olunur */}
          {product.description && (
            <div className="text-base text-[#191919] leading-relaxed">
              <div className="text-[20px] font-bold uppercase pb-4">
                Product Story
              </div>
              <div
                className="prose max-w-none prose-p:text-[20px] prose-p:text-[#191919] prose-ul:list-disc prose-ul:pl-5 prose-li:text-[#191919]"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          )}

          <div className="grid grid-cols-2 border-t border-[#e5e7eb]">
            {/* Material məlumatları */}
            {product.variations?.[0]?.materialComposition?.length > 0 && (
              <div className="pt-4 text-base">
                <h4 className="font-bold text-[20px] mb-2">
                  Material Information
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {product.variations[0].materialComposition.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* Qulluq təlimatları */}
            {product.productStory.careInstructions?.length > 0 && (
              <div className="pt-4 text-base">
                <h4 className="font-bold text-[20px] mb-2">
                  Care Instructions
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {product.productStory.careInstructions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default Detail;
