import React, { useEffect, useState } from "react";
import RotatingBanner from "./RotatingBanner";
import Navbar from "./Navbar";
import { getAllCategories } from "../services/api";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  return (
    <>
      <RotatingBanner />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <MobileMenu categories={categories} setIsOpen={setIsOpen} />
      )}
    </>
  );
}

export default Header;
