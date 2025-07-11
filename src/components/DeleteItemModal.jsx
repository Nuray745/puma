import React from "react";

function DeleteItemModal({ item, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-3 tablet:p-6">
      <div className="bg-white w-full max-w-md rounded p-2 tablet:p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-[#191919]">
            Are you sure you want to remove this item?
          </h2>
          <button
            onClick={onClose}
            className="hover:bg-[#3B404733] rounded-full p-1 cursor-pointer"
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
                d="m10.586 12-5.293 5.293 1.414 1.414L12 13.414l5.293 5.293 1.414-1.414L13.414 12l5.293-5.293-1.414-1.414L12 10.586 6.707 5.293 5.293 6.707 10.586 12Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-4 mb-4 border border-[#DFE0E1] p-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover"
          />

          <div className="flex flex-col tablet:flex-row items-center gap-2">
            <div className="flex-1 flex flex-col justify-start">
              <p className="text-sm tablet:text-base font-bold">{item.name}</p>
              <p className="text-sm tablet:text-base text-[#676D75]">{item.subHeader}</p>
              <p className="text-xs tablet:text-sm text-[#6C6C6C]">
                Color: <span className="text-[#191919]"> {item.color}</span>
              </p>
              <p className="text-xs tablet:text-sm text-[#6C6C6C]">
                Size: <span className="text-[#191919]">{item.size}</span>
              </p>
              <p className="text-xs tablet:text-sm text-[#6C6C6C]">
                Quantity: <span className="text-[#191919]">{item.count}</span>
              </p>
            </div>

            <div className="self-start text-sm font-bold">
              ${(item.price * item.count).toFixed(2)}
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => {
              onConfirm(item.id);
              onClose();
            }}
            className="cursor-pointer bg-[#191919] hover:bg-[#3c4046] text-white w-full py-2 font-bold text-base rounded"
          >
            REMOVE
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer border border-[#DFE0E1] w-full py-2 font-bold text-white text-base rounded bg-[#191919] hover:bg-[#3c4046]"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteItemModal;
