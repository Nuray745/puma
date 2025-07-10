import React, { useState } from "react";
import RotatingBanner from "./RotatingBanner";
import Navbar from "./Navbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RotatingBanner />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
