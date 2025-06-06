import React from "react";
import RotatingBanner from "./RotatingBanner";

function Header() {
  return (
    <header className="bg-[#181818] font-ff-din-exp">
      {/* Üstdəki mesaj */}
      <RotatingBanner />
    </header>
  );
}

export default Header;
