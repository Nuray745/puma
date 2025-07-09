import React from "react";

function Button({ label, type = "button", onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition font-semibold ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
