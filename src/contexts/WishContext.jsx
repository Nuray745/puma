import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

export const WishListCntx = createContext();

function WishContext({ children }) {
  const arr = JSON.parse(localStorage.getItem("localWish")) || [];
  const [wish, setWish] = useState(arr);

  // .setitem - elave edir
  // .getitem - gedib getirir
  // .removeItem - silir
  // .clear

  function addWish(item) {
    const yoxla = wish.find((elem) => elem.id == item.id);
    if (!yoxla) {
      setWish([...wish, item]);
      toast.success("Kasibligini uzune vurdun!");
      localStorage.setItem("localWish", JSON.stringify([...wish, item]));
    } else toast.error("Besdirde tay");
  }

  function clearWish() {
    setWish([]);
    localStorage.removeItem("localWish");
  }

  function delWish(id) {
    toast.error("Məhsul wishList-dən silindi!");
    const yeniElem = wish.filter((item) => item.id != id);
    setWish(yeniElem);
    localStorage.setItem("localWish", JSON.stringify(yeniElem));
  }

  return (
    <WishListCntx.Provider
      value={{ wish, setWish, addWish, clearWish, delWish }}
    >
      {children}
    </WishListCntx.Provider>
  );
}

export default WishContext;
