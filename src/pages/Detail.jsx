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
  const images = product.images || [variation?.preview];

  return (
    <div className="px-4 desktop:px-16 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4">
        {images.slice(0, 4).map((img, idx) => (
          <img
            key={idx}
            src={img || "default-image-url"}
            alt="product"
            className="w-full aspect-square object-cover border"
          />
        ))}
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-sm text-gray-500">{product.subHeader}</p>
        </div>

        {product.badge && (
          <span className="text-xs bg-black text-white py-1 px-2 w-fit rounded">
            {product.badge}
          </span>
        )}

        <div className="text-2xl font-semibold">${price}</div>

        {/* Color options */}
        {product.colors?.length > 0 && (
          <div>
            <p className="font-medium mb-1">Color:</p>
            <div className="flex gap-2">
              {product.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 border rounded-full"
                  style={{ backgroundColor: color.hex }}
                />
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
            {product.description || "No description available for this product."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
