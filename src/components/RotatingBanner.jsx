import React, { useState, useEffect } from "react";
import { useMatchMedia } from "../hooks/use-matchwidth";

const messages = ["FREE SHIPPING ON ORDERS $60+", "FREE AND EASY RETURNS"];

function RotatingBanner() {
  const isMobile = useMatchMedia("(max-width: 540px)");

  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Opacity 0 etmək
      setOpacity(0);

      // 300ms sonra mətni dəyişmək və opacity 1 etmək
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setOpacity(1);
      }, 300);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className={`font-ff-din-exp font-semibold flex h-11 bg-white text-black items-center justify-center ${
        isMobile ? "text-xs" : "text-sm"
      }`}
    >
      <div
        className="transition-opacity duration-300 inline-flex flex-row"
        style={{ opacity }}
      >
        <div className="flex flex-wrap text-center justify-center items-center">
          <span>{messages[index]}</span>
          <a href="#" className="cursor-pointer uppercase ml-3 border-b">
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}

export default RotatingBanner;
