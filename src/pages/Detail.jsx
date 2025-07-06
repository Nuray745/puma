import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api"; // bunu sizdə varsa

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product) return <p className="text-center my-10">Loading...</p>;
  if (!product?.id) return <NotFound />;

  const variation = product.variations?.[0] || {};
  const price = variation?.productPrice?.price || "N/A";
  const images = variation.images?.map((img) => img.href) || [
    variation.preview,
  ];

  return (
    <div className="px-4 desktop:px-16 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image Gallery */}
      {/* Image Gallery - 2 sütunlu grid, 4+ şəkil göstərə bilər */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img || "default-image-url"}
            alt={`product-${idx}`}
            className="w-full aspect-square object-cover border"
          />
        ))}
      </div>

      {/* Product Info */}
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
                <svg
                  className="w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 6"
                  id="icon"
                >
                  <path
                    fill="#000"
                    d="M2.634 2.924a.888.888 0 0 0-.9-.914c-.497 0-.9.384-.9.914 0 .525.403.915.9.915.496 0 .9-.378.9-.915Zm.007 1.599v-.416c-.245.288-.61.467-1.046.467C.688 4.574 0 3.87 0 2.924c0-.94.715-1.656 1.615-1.656.424 0 .782.18 1.026.46v-.402h.814v3.197h-.814Zm4.769-.71c-.286 0-.365-.102-.365-.37v-1.42h.524v-.697h-.524v-.78h-.834v.78H5.137V1.13c0-.268.106-.37.397-.37h.183V.14h-.402c-.688 0-1.012.217-1.012.882v.303H3.84v.697h.463v2.5h.834v-2.5h1.075V3.59c0 .652.258.934.933.934h.43v-.71H7.41Zm2.991-1.177c-.059-.415-.41-.664-.82-.664s-.748.242-.834.664h1.654Zm-1.661.5c.06.472.41.741.854.741.35 0 .623-.16.781-.416h.854c-.199.678-.828 1.113-1.655 1.113-1 0-1.7-.678-1.7-1.643 0-.966.74-1.663 1.72-1.663.987 0 1.702.704 1.702 1.663 0 .07-.007.14-.02.204H8.74Zm7.86-.212a.9.9 0 0 0-.9-.914c-.497 0-.9.384-.9.914a.9.9 0 1 0 1.8 0Zm-2.622-1.598h.814v.415a1.327 1.327 0 0 1 1.046-.473c.894 0 1.595.71 1.595 1.65s-.715 1.656-1.615 1.656a1.3 1.3 0 0 1-1-.428v1.692h-.84V1.326Zm6.389 1.598a.888.888 0 0 0-.9-.914c-.496 0-.9.384-.9.914 0 .525.404.915.9.915.497 0 .9-.378.9-.915Zm.008 1.599v-.416c-.245.288-.61.467-1.046.467-.907 0-1.595-.704-1.595-1.65 0-.94.714-1.656 1.615-1.656.423 0 .78.18 1.026.46v-.402h.814v3.197h-.814ZM12.511 1.64s.207-.372.715-.372c.217 0 .357.072.357.072v.816s-.306-.183-.588-.146c-.28.037-.459.287-.458.62v1.893h-.84V1.326h.814v.313Zm12.479-.314-2.055 4.502h-.866l.806-1.74-1.364-2.762h.982l.799 1.845.819-1.845h.88Zm6.561-.073L29.514.117c-.598-.333-1.346.084-1.346.75v.117c0 .106.058.203.152.256l.385.214c.113.063.254-.016.254-.141v-.29c0-.145.162-.236.292-.163l1.765.984c.13.072.13.253 0 .325l-1.765.984c-.13.073-.292-.018-.292-.163v-.154c0-.667-.747-1.084-1.346-.75l-2.038 1.136a.852.852 0 0 0 0 1.5l2.038 1.136c.598.334 1.346-.083 1.346-.75v-.117a.293.293 0 0 0-.152-.255l-.385-.215c-.113-.063-.254.016-.254.142v.29c0 .145-.162.235-.292.163l-1.765-.984a.185.185 0 0 1 0-.326l1.765-.985c.13-.072.292.018.292.163v.155c0 .667.748 1.084 1.346.75l2.037-1.136a.851.851 0 0 0 0-1.5Z"
                  />
                </svg>
                <span className="sr-only">Learn more about Afterpay</span>
              </button>
              or{" "}
              <button
                type="button"
                className="cursor-pointer h-6 px-1 py-[9px] border-2 border-[#DFE0E1] hover:border-[#8C9198] rounded-sm flex items-center mx-1"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="klarna-dialog"
              >
                <svg
                  className="w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 80 48"
                  id="icon"
                >
                  <path
                    fill="#0A0B09"
                    d="M70.178 27.467a1.83 1.83 0 0 0-1.822 1.839 1.83 1.83 0 0 0 1.822 1.838A1.83 1.83 0 0 0 72 29.306a1.83 1.83 0 0 0-1.822-1.839Zm-5.995-1.421c0-1.39-1.177-2.517-2.63-2.517-1.452 0-2.63 1.127-2.63 2.517s1.177 2.517 2.63 2.517c1.453 0 2.63-1.127 2.63-2.517Zm.01-4.892h2.903v9.784h-2.903v-.626c-.82.565-1.81.896-2.877.896-2.826 0-5.116-2.31-5.116-5.162 0-2.851 2.29-5.162 5.115-5.162 1.068 0 2.058.331 2.878.896v-.626Zm-23.23 1.274v-1.274H37.99v9.784h2.978V26.37c0-1.541 1.655-2.37 2.804-2.37l.035.002v-2.847c-1.18 0-2.264.51-2.845 1.273Zm-7.404 3.618c0-1.39-1.177-2.517-2.63-2.517-1.453 0-2.63 1.127-2.63 2.517s1.177 2.517 2.63 2.517c1.453 0 2.63-1.127 2.63-2.517Zm.01-4.892h2.903v9.784h-2.903v-.626c-.82.565-1.81.896-2.878.896-2.825 0-5.116-2.31-5.116-5.162 0-2.851 2.29-5.162 5.116-5.162 1.068 0 2.058.331 2.878.896v-.626Zm17.472-.263c-1.16 0-2.257.363-2.99 1.365v-1.101h-2.89v9.783h2.925v-5.142c0-1.487.989-2.216 2.18-2.216 1.275 0 2.009.77 2.009 2.196v5.162h2.899v-6.222c0-2.277-1.794-3.825-4.133-3.825ZM21.347 30.938h3.038V16.794h-3.038v14.144ZM8 30.94h3.217V16.79H8v14.15Zm11.253-14.15c0 3.064-1.183 5.914-3.291 8.032l4.447 6.119h-3.974l-4.833-6.65 1.248-.943a8.15 8.15 0 0 0 3.255-6.557h3.148Z"
                  />
                </svg>
                <span className="sr-only">klarna-payment-info</span>
              </button>
            </span>
          </div>
        )}

        {/* Color options */}
        {product.colors?.length > 0 && (
          <div>
            <p className="font-medium mb-1">Color:</p>
            <div className="flex gap-4 flex-wrap">
              {product.colors.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <span className="text-xs text-gray-600 text-center max-w-[70px] leading-tight">
                    {color.name}
                  </span>
                  <div className="w-12 h-12 border rounded overflow-hidden">
                    <img
                      src={
                        product.variations?.[0]?.preview ||
                        "default-color-image.jpg"
                      }
                      alt={color.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Size Options */}
        <div>
          <p className="font-medium mb-1">Size:</p>
          <div className="flex flex-wrap gap-2">
            {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
              <button
                key={size}
                className="border px-4 py-2 rounded hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-4">
          <button className="bg-black text-white py-3 font-bold uppercase">
            Add to Cart
          </button>
          <button className="border py-3 font-semibold uppercase">
            Explore All
          </button>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h3 className="font-bold mb-2">Description</h3>
          <p className="text-sm leading-relaxed text-gray-700">
            {product.description ||
              "No description available for this product."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
