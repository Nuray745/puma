import React, { useContext, useState } from "react";
import { BASKET } from "../contexts/BasketContext";
import EditItemModal from "../components/EditItemModal";
import DeleteItemModal from "../components/DeleteItemModal";
import { Link } from "react-router-dom";
import { getProductById } from "../services/api";


function Basket() {
  const { basket, deleteFromBasket, updateQuantity, updateSize } = useContext(BASKET);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [editItemSizes, setEditItemSizes] = useState([]);

  const subtotal = basket.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  if (basket.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <svg
          className="w-40 text-gray-300"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M1.333 3.333H2.77l1.21 7.277c.07.418.431.724.855.724h6.669a.867.867 0 0 0 .847-.685l1.14-5.315H4.453L3.898 2H1.333v1.333ZM5.231 10l-.555-3.333h7.166L11.128 10H5.23Z" />
          <path d="M12 12.667H4.667V14H12v-1.333Z" />
        </svg>
        <h3 className="text-[24px] tablet:text-[28px] text-[#181818] pt-4 font-bold text-center">
          Your Shopping Cart is Empty
        </h3>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 tablet:px-8 py-4 tablet:py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <h2 className="col-span-1 lg:col-span-3 text-[24px] tablet:text-[32px] text-[#191919] font-bold">
        MY SHOPPING CART{" "}
        <span className="text-[#6C6C6C] font-normal">
          ({basket.reduce((sum, item) => sum + item.count, 0)})
        </span>
      </h2>
      <div className="col-span-1 lg:col-span-2 space-y-6">
        {basket.map((item) => (
          <div
            key={item.id}
            className="border border-[#DFE0E1] rounded p-2 tablet:p-5 flex flex-col md:flex-row justify-between gap-4"
          >
            <div className="flex gap-5">
              <Link to={`/product/${item.productId}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-48 aspect-square object-contain rounded"
                />
              </Link>

              <div>
                <h3 className="font-bold text-base tablet:text-[20px] text-[#181818]">
                  {item.name}
                </h3>
                <p className="text-sm tablet:text-base text-[#676D75]">
                  {item.subHeader}
                </p>
                <p className="text-sm tablet:text-base text-[#6C6C6C] pt-3">
                  Color: <span className="text-[#191919]">{item.color}</span>
                </p>
                <p className="text-sm tablet:text-base text-[#6C6C6C] pb-2">
                  Size: <span className="text-[#191919]">{item.size}</span>
                </p>

                <div className="relative inline-block ">
                  <select
                    value={item.count}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="focus:border-black focus:ring-0 focus:outline-none focus:shadow-[0px_0px_0px_2.5px_#777777] active:border-black active:shadow-none transition-all ease-out duration-300 appearance-none border border-[#DFE0E1] text-sm mt-1 px-4 py-2 pr-10 rounded cursor-pointer w-[90px]"
                  >
                    {[...Array(12)].map((_, idx) => {
                      const num = idx + 1;
                      return (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      );
                    })}
                  </select>

                  <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <div className="text-base tablet:text-[20px] text-[#191919] font-bold">
                ${(item.price * item.count).toFixed(2)}
              </div>
              <div className="flex items-center">
                <button
                  onClick={async () => {
                    const product = await getProductById(item.productId);
                    const sizes =
                      product.productMeasurements?.metric
                        ?.slice(1)
                        ?.map((row) => row[0]) || [];
                    setEditItemSizes(sizes);
                    setEditItem(item);
                  }}
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
                  onClick={() => setDeleteItem(item)}
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

              {editItem && (
                <EditItemModal
                  item={editItem}
                  sizes={editItemSizes}
                  onClose={() => setEditItem(null)}
                  onUpdate={(id, newSize) => {
                    updateSize(id, newSize); 
                  }}
                />
              )}

              {deleteItem && (
                <DeleteItemModal
                  item={deleteItem}
                  onClose={() => setDeleteItem(null)}
                  onConfirm={(id) => {
                    deleteFromBasket(id);
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4 col-span-1">
        <div className="flex items-center justify-center gap-2 border border-[#DFE0E1] p-2 rounded text-sm text-[#008626] font-semibold">
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
              d="M4 8h10v8h-3.268a2 2 0 0 0-3.464 0H6v-1H4v3h3.268a2 2 0 0 0 3.464 0h5.536a2 2 0 0 0 3.464 0H22v-5.333L19.6 10H16V6H4v2Zm14 7a2 2 0 0 0-1.732 1H16v-4h2.71L20 13.434V16h-.268A2 2 0 0 0 18 15Zm0 2.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM9.667 17a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z"
              fill="currentColor"
            />
            <path d="M10 10H3v1h7v-1Zm-8 2h7v1H2v-1Z" fill="currentColor" />
          </svg>
          YOU'VE EARNED FREE SHIPPING
        </div>
        <div className="flex items-center justify-center gap-2 border border-[#DFE0E1] p-2 rounded text-sm text-[#6C6C6C] font-semibold">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            id="icon"
          >
            <path fill="transparent" d="M0 0h24v24H0z" />
            <path d="m21 12-3 3-3-3" stroke="currentColor" strokeWidth="2" />
            <path
              d="M17.71 14a6.953 6.953 0 0 0 .29-2 7 7 0 1 0-5 6.71"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          FREE RETURNS ON ALL QUALIFYING ORDERS
        </div>

        <div className="rounded space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              APPLY A PROMO CODE
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter a promo code"
                className="focus:border-black focus:ring-0 focus:outline-none focus:shadow-[0px_0px_0px_2.5px_#777777] active:border-black active:shadow-none transition-all ease-out duration-300 rounded-[2px] flex-1 border border-[#DFE0E1] px-2 py-1"
              />
              <button className="border border-[#DFE0E1] hover:border-black cursor-pointer px-4 ml-2 text-sm font-bold">
                APPLY
              </button>
            </div>
          </div>

          <div className="text-sm text-[#6C6C6C] font-bold space-y-1 border-t border-[#DFE0E1] pt-1">
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>SHIPPING COSTS</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between">
              <span>ESTIMATED SALES TAX</span>
              <span>–</span>
            </div>
          </div>

          <div className="flex justify-between text-[20px] font-bold py-6 border-t border-[#DFE0E1]">
            ESTIMATED TOTAL
            <span> ${subtotal.toFixed(2)}</span>
          </div>

          <button className="w-full bg-[#191919] hover:bg-[#3c4046] cursor-pointer text-[18px] uppercase text-white py-3 font-bold rounded">
            Checkout
          </button>

          <button className="w-full border border-[#DFE0E1] hover:bg-[#DFE0E1] cursor-pointer font-bold flex items-center justify-center gap-2">
            <svg
              className="w-22"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 24"
              id="icon"
            >
              <path
                fill="#253B80"
                d="M15.965 9.747h-1.77a.247.247 0 0 0-.244.208l-.716 4.541a.148.148 0 0 0 .146.17h.846c.12 0 .224-.088.243-.208l.193-1.224a.247.247 0 0 1 .243-.208h.56c1.167 0 1.84-.565 2.016-1.683.08-.49.003-.874-.226-1.143-.252-.296-.698-.453-1.29-.453Zm.205 1.659c-.097.635-.583.635-1.052.635h-.267l.187-1.186a.148.148 0 0 1 .146-.125h.122c.32 0 .622 0 .778.182.093.11.121.27.086.494Zm5.089-.02h-.848a.148.148 0 0 0-.146.124l-.038.237-.059-.086c-.184-.266-.593-.355-1.002-.355-.937 0-1.737.71-1.893 1.705-.08.497.034.972.316 1.303.259.304.628.431 1.068.431.755 0 1.174-.485 1.174-.485l-.038.235a.148.148 0 0 0 .146.17h.763a.246.246 0 0 0 .244-.207l.458-2.902a.148.148 0 0 0-.145-.17Zm-1.182 1.65a.945.945 0 0 1-.957.81c-.246 0-.443-.08-.57-.23-.125-.148-.172-.36-.133-.595a.95.95 0 0 1 .95-.816c.241 0 .437.08.566.23.13.153.18.366.144.6Zm5.698-1.65h-.852a.247.247 0 0 0-.204.107l-1.175 1.732-.498-1.664a.247.247 0 0 0-.237-.175h-.837a.149.149 0 0 0-.14.195l.938 2.754-.882 1.246a.148.148 0 0 0 .12.233h.852c.08 0 .156-.04.202-.106l2.834-4.09a.148.148 0 0 0-.121-.232Z"
              />
              <path
                fill="#179BD7"
                d="M28.596 9.747h-1.771a.247.247 0 0 0-.243.208l-.716 4.541a.148.148 0 0 0 .146.17h.908a.173.173 0 0 0 .17-.145l.203-1.287a.247.247 0 0 1 .243-.208h.56c1.167 0 1.84-.565 2.016-1.683.08-.49.004-.874-.226-1.143-.251-.296-.697-.453-1.29-.453Zm.204 1.659c-.096.635-.582.635-1.051.635h-.267l.187-1.186a.148.148 0 0 1 .146-.125h.122c.32 0 .622 0 .778.182.093.11.12.27.085.494Zm5.09-.02h-.848a.147.147 0 0 0-.146.124l-.037.237-.06-.086c-.184-.266-.593-.355-1.001-.355-.937 0-1.737.71-1.893 1.705-.081.497.034.972.315 1.303.26.304.629.431 1.069.431.755 0 1.173-.485 1.173-.485l-.038.235a.148.148 0 0 0 .146.17h.764a.246.246 0 0 0 .243-.207l.458-2.902a.149.149 0 0 0-.146-.17Zm-1.183 1.65a.945.945 0 0 1-.957.81c-.245 0-.443-.08-.569-.23-.125-.148-.172-.36-.133-.595a.95.95 0 0 1 .95-.816c.241 0 .437.08.566.23.13.153.18.366.143.6Zm2.182-3.164-.727 4.624a.148.148 0 0 0 .145.17h.731a.246.246 0 0 0 .243-.208l.717-4.54a.148.148 0 0 0-.145-.17h-.819a.148.148 0 0 0-.145.124Zm-24.921.113a4.205 4.205 0 0 1-.025.143c-.32 1.644-1.416 2.212-2.816 2.212h-.712a.346.346 0 0 0-.342.293l-.365 2.314-.103.656a.183.183 0 0 0 .18.21h1.263c.15 0 .277-.108.3-.256l.013-.064.238-1.51.015-.083a.304.304 0 0 1 .3-.257h.19c1.224 0 2.183-.497 2.463-1.936.117-.6.056-1.102-.253-1.455-.098-.11-.216-.2-.346-.267Z"
              />
              <path
                fill="#222D65"
                d="M9.633 9.852a2.564 2.564 0 0 0-.312-.07 3.956 3.956 0 0 0-.628-.045H6.79c-.15 0-.278.11-.3.257l-.406 2.565-.011.074a.347.347 0 0 1 .342-.293h.712c1.4 0 2.496-.568 2.816-2.213.01-.048.017-.096.025-.142a1.7 1.7 0 0 0-.335-.133Z"
              />
              <path
                fill="#253B80"
                d="M6.49 9.994a.304.304 0 0 1 .3-.257h1.903c.226 0 .436.015.628.046.13.02.258.05.384.091.094.032.182.068.263.111.095-.608 0-1.021-.33-1.396C9.277 8.177 8.624 8 7.787 8h-2.43a.347.347 0 0 0-.343.293l-1.011 6.413a.21.21 0 0 0 .206.241h1.499l.376-2.388.405-2.565Z"
              />
            </svg>
          </button>

          <button className="w-full border border-[#DFE0E1] hover:bg-[#DFE0E1] cursor-pointer font-bold flex items-center justify-center gap-2">
            <svg
              className="w-22"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 24"
              id="icon"
            >
              <path
                fill="#3C4043"
                d="M20.002 15.195H18.9v-8.57h2.92c.74 0 1.37.247 1.886.74.528.493.792 1.096.792 1.807a2.37 2.37 0 0 1-.792 1.818c-.51.488-1.141.729-1.887.729h-1.818v3.476Zm0-7.514v2.988h1.841c.436 0 .803-.149 1.09-.442.293-.292.442-.648.442-1.05 0-.395-.15-.745-.442-1.037-.287-.305-.648-.454-1.09-.454h-1.841v-.005Zm7.377 1.457c.814 0 1.457.218 1.927.654.47.435.706 1.032.706 1.79v3.613h-1.05v-.815h-.046c-.453.672-1.061 1.004-1.818 1.004-.649 0-1.188-.189-1.624-.573a1.832 1.832 0 0 1-.654-1.434c0-.608.23-1.09.689-1.446.459-.361 1.072-.54 1.835-.54.654 0 1.193.121 1.612.362v-.252c0-.384-.15-.706-.453-.975a1.555 1.555 0 0 0-1.067-.402c-.614 0-1.101.258-1.457.78l-.97-.608c.534-.774 1.326-1.158 2.37-1.158Zm-1.423 4.256c0 .287.12.528.367.717.241.19.528.287.855.287.464 0 .877-.172 1.239-.517.361-.344.545-.745.545-1.21-.344-.27-.82-.407-1.434-.407-.448 0-.82.109-1.119.321-.304.224-.453.493-.453.809ZM36 9.327l-3.671 8.444h-1.136l1.365-2.954-2.42-5.49h1.198l1.744 4.21h.023l1.698-4.21H36Z"
              />
              <path
                fill="#4285F4"
                d="M15.621 11.025c0-.36-.032-.703-.091-1.033h-4.617v1.893h2.659a2.278 2.278 0 0 1-.987 1.525v1.228h1.583c.924-.855 1.453-2.12 1.453-3.613Z"
              />
              <path
                fill="#34A853"
                d="M12.585 13.41c-.44.297-1.007.47-1.67.47-1.283 0-2.37-.863-2.76-2.027H6.523v1.266a4.914 4.914 0 0 0 4.391 2.707c1.327 0 2.442-.437 3.254-1.188l-1.583-1.228Z"
              />
              <path
                fill="#FABB05"
                d="M8.001 10.913c0-.327.055-.643.154-.94V8.706H6.523A4.888 4.888 0 0 0 6 10.913c0 .794.189 1.543.522 2.206l1.633-1.266a2.96 2.96 0 0 1-.154-.94Z"
              />
              <path
                fill="#E94235"
                d="M10.914 7.945c.725 0 1.373.25 1.886.737l1.402-1.402C13.35 6.487 12.24 6 10.914 6a4.915 4.915 0 0 0-4.391 2.706l1.632 1.267c.39-1.165 1.477-2.028 2.76-2.028Z"
              />
            </svg>
          </button>
        </div>

        <p className="text-xs text-[#6C6C6C]">
          By continuing, I confirm that I have read and accept the Terms and
          Conditions, and the Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default Basket;
