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
      <div className="sticky top-0 z-100">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && (
          <div className="absolute w-full bg-white overflow-y-auto max-h-screen scroll-smooth scrollbar-hide pb-15">
            <MobileMenu categories={categories} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
