import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const BASKET = createContext();

function BasketContext({ children }) {
  const initial = JSON.parse(localStorage.getItem("localBasket")) || [];
  const [basket, setBasket] = useState(initial);  

  useEffect(() => {
    localStorage.setItem("localBasket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (product, selectedColorIndex, selectedSize) => {
    const variation = product.variations?.[selectedColorIndex];
    const colorName = product.colors?.[selectedColorIndex]?.name || "";
    const price = variation?.productPrice?.price || 0;
    const image = variation?.preview || "";

    if (!selectedSize) {
      toast.error("Zəhmət olmasa ölçü seçin");
      return;
    }

    const uniqueId = `${product.id}-${selectedColorIndex}-${selectedSize}`;

    const newItem = {
      id: uniqueId,
      productId: product.id,
      name: product.header,
      subHeader: product.subHeader,
      price,
      color: colorName,
      size: selectedSize,
      image,
      count: 1,
    };

    const existingItem = basket.find((item) => item.id === uniqueId);

    if (!existingItem) {
      setBasket([...basket, newItem]);
      toast.success("Səbətə əlavə edildi!");
    } else {
      const updated = basket.map((item) =>
        item.id === uniqueId ? { ...item, count: item.count + 1 } : item
      );
      setBasket(updated);
      toast.success("Məhsulun sayı artırıldı!");
    }
  };

  const deleteFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
    toast.error("Məhsul səbətdən silindi!");
  };

  const updateQuantity = (id, count) => {
    setBasket((prev) =>
      prev.map((item) => (item.id === id ? { ...item, count } : item))
    );
  };

  return (
    <BASKET.Provider
      value={{
        basket,
        setBasket,
        addToBasket,
        deleteFromBasket,
        updateQuantity,
      }}
    >
      {children}
    </BASKET.Provider>
  );
}

export default BasketContext;
