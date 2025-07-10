import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WISHLIST } from "../contexts/WishlistContext";
import { BASKET } from "../contexts/BasketContext";
import { toast } from "react-hot-toast";
import EditItemModal from "../components/EditItemModal"; // <-- Modal komponentini import et

function Wishlist() {
  const { wishlist, removeFromWishlist, updateWishlistItem } =
    useContext(WISHLIST);
  const navigate = useNavigate();
  const { addToBasket } = useContext(BASKET);
  const [editItem, setEditItem] = useState(null); // <-- Modal üçün state
  const today = new Date().toLocaleDateString();

  const handleAddToCart = (item) => {
    if (!item.size) {
      toast.error("Zəhmət olmasa ölçü seçin");
      return;
    }

    addToBasket(
      {
        id: item.productId,
        header: item.name,
        subHeader: item.subHeader,
        colors: [{ name: item.color }],
        variations: [
          {
            preview: item.preview,
            productPrice: { price: item.price },
          },
        ],
      },
      0,
      item.size
    );

    removeFromWishlist(item.id); // ✅ wishlist-dən sil
    navigate("/basket");
  };

  const handleUpdateSize = (id, newSize) => {
    updateWishlistItem(id, newSize); // <-- Contextdə ölçünü dəyiş
    toast.success("Ölçü yeniləndi!");
    setEditItem(null);
  };

  if (!wishlist.length) {
    return (
      <div className="bg-white p-8">
        <div className="max-w-5xl mx-auto border border-[#DFE0E1] rounded-md shadow-md p-6">
          <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
            <h1 className="text-[24px] uppercase text-[#191919]">
              MY WISHLIST
            </h1>
            <span className="text-[20px] text-[#191919]">
              {wishlist.length} items
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-[28px] font-bold p-25">
            <svg
              className="w-[150px] text-[rgb(204,204,204)]"
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
            Your Wishlist is Empty
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8">
      <div className="max-w-5xl mx-auto border border-[#DFE0E1] rounded-md shadow-md p-6">
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
          <h1 className="text-[24px] uppercase text-[#191919]">MY WISHLIST</h1>
          <span className="text-[20px] text-[#191919]">
            {wishlist.length} items
          </span>
        </div>

        <div className="space-y-10">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-start gap-6 border-b border-[#DFE0E1] pb-6"
            >
              <div className="relative w-full max-w-[250px]">
                <img
                  src={
                    item.preview ||
                    item.images?.[0] ||
                    "https://via.placeholder.com/300"
                  }
                  alt={item.name}
                  className="w-full aspect-square object-cover rounded"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-[20px] font-bold text-[#191919]">
                  {item.name}
                </h2>
                <p className="text-[20px] text-[#676D75]">{item.subHeader}</p>
                <p className="text-[18px] text-[#191919]">{item.color}</p>
                <p className="text-sm pt-2">
                  <strong>SIZE:</strong> {item.size}
                </p>
                <p className="text-sm">
                  <strong>PRICE:</strong> ${item.price}
                </p>

                <div className="flex items-center py-2 gap-2">
                  <button
                    onClick={() => setEditItem(item)} // <-- Edit düyməsi modalı açır
                    className="hover:bg-[#3B404733] rounded-full p-2 cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      id="icon"
                    >
                      <path fill="transparent" d="M0 0h24v24H0z" />
                      <path
                        d="m12.755 5.496 2.75 2.749-7.359 7.358-2.978.229.23-2.978 7.357-7.358ZM4.354 15.895Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M14.625 2.212a.3.3 0 0 1 .424 0l3.739 3.74a.3.3 0 0 1 0 .423l-1.176 1.176-4.163-4.163 1.176-1.176ZM4 19h16v2H4v-2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="hover:bg-[#3B404733] rounded-full p-2 cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      id="icon"
                    >
                      <path fill="transparent" d="M0 0h24v24H0z" />
                      <path
                        d="m17.915 8-1.067 13H7.152L6.085 8h11.83Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M5 4.3a.3.3 0 0 1 .3-.3h13.4a.3.3 0 0 1 .3.3V6H5V4.3ZM10 3h4v1h-4V3ZM14 11v7h-1v-7h1ZM11 11v7h-1v-7h1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-[#191919] text-white py-3 cursor-pointer text-base font-bold rounded hover:bg-[#3c4046]"
                  >
                    ADD TO CART
                  </button>
                </div>
                <p className="text-base text-right font-semibold ml-4 whitespace-nowrap">
                  Item added {today}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ EditItemModal çağırılır */}
      {editItem && (
        <EditItemModal
          item={editItem}
          sizes={["XS", "S", "M", "L", "XL"]}
          onClose={() => setEditItem(null)}
          onUpdate={handleUpdateSize}
        />
      )}
    </div>
  );
}

export default Wishlist;
