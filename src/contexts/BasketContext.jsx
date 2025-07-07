import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const BASKET = createContext();

function BasketContext({ children }) {
  const arr = JSON.parse(localStorage.getItem("localBasket")) || [];
  const [basket, setBasket] = useState(arr);

  useEffect(() => {
    localStorage.setItem("localBasket", JSON.stringify(basket));
  }, [basket]); 

  const addToBasket = (item) => {
    const yoxla = basket.find((elem) => elem.id === item.id);
    if (!yoxla) {
      setBasket([...basket, { ...item, count: 1 }]);
      toast.success("Səbətə əlavə edildi!");
    } else {
      const updatedBasket = basket.map(elem => {
        if (elem.id === item.id) {
          return { ...elem, count: elem.count + 1 };
        }
        return elem;
      });
      toast.success("Məhsulun sayı artırıldı!");
      setBasket(updatedBasket);
    }
  };

  const deleteFromBasket = (id) => {
    toast.error("Məhsul səbətdən silindi!");
    const yeniElem = basket.filter(item => item.id !== id);
    setBasket(yeniElem);
  };

  return (
    <BASKET.Provider value={{ basket, setBasket, addToBasket, deleteFromBasket }}>
      {children}
    </BASKET.Provider>
  );
}

export default BasketContext;
