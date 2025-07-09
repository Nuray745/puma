import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const WISHLIST = createContext();

function WishlistContext({ children }) {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("localWishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("localWishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product, selectedColorIndex, selectedSize) => {
    if (!selectedSize) {
      toast.error("Zəhmət olmasa ölçü seçin");
      return;
    }

    const uniqueId = `${product.id}-${selectedColorIndex}-${selectedSize}`;
    const variation = product.variations?.[selectedColorIndex];
    const colorName = product.colors?.[selectedColorIndex]?.name || "";
    const price = variation?.productPrice?.price || 0;
    const preview = variation?.preview || "";
    const images = variation?.images?.map((img) => img.href) || [];

    const newItem = {
      id: uniqueId,
      productId: product.id,
      name: product.header,
      subHeader: product.subHeader,
      price,
      color: colorName,
      size: selectedSize,
      preview,
      images,
    };

    const exists = wishlist.find((item) => item.id === uniqueId);
    if (exists) {
      toast("Məhsul artıq wishlist-də var");
    } else {
      setWishlist((prev) => [...prev, newItem]);
      toast.success("Məhsul wishlist-ə əlavə olundu!");
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WISHLIST.Provider
      value={{ wishlist, setWishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WISHLIST.Provider>
  );
}

export default WishlistContext;
