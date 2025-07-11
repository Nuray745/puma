import React from "react";
import {
  mainpagevideo,
  mainpagevideoresponsive,
  trending1,
  trending2,
  trending3,
  trending4,
} from "../assets";
import { useMatchMedia } from "../hooks/use-matchwidth";
import Slider from "./Slider";

function Main() {
  const sections = [
    {
      image:
        "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1536/cms/images/9f3a83852f79995f711e8043788ef1f60eb9e73e?_a=BAMClqeA0", // öz şəkilinlə əvəz et
      title: "HISTORY NEEDS MAKERS",
      subtitle: "PORTUGAL DOES IT AGAIN",
      buttons: [
        { label: "Shop Now", link: "#" },
        { label: "Shop New in Soccer", link: "#" },
      ],
    },
    {
      image:
        "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1536/cms/images/de076e48cd47d47131cde01d9d0ff88556b1dea1?_a=BAMClqeA0", // öz şəkilinlə əvəz et
      title: "0 DOUBTS",
      subtitle: "ALL-PRO NITRO™ PINSTRIPES BY TYRESE HALIBURTON",
      buttons: [
        { label: "SHOP TYRESE HALIBURTON ", link: "#" },
        { label: "SHOP ALL BASKETBALL", link: "#" },
      ],
    },
  ];
  const sections2 = [
    {
      image:
        "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1536/cms/images/af050094cac7a4aba9b80155c33c2f08263cbe55?_a=BAMClqeA0", // öz şəkilinlə əvəz et
      title: "FLASH DEAL: 2 SOFT SETS FOR $40 ",
      subtitle: "DOUBLE THE COMFORT",
      buttons: [{ label: "Shop Now", link: "#" }],
    },
    {
      image:
        "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1536/cms/images/e81d2be751523d24b1bc3daa3e2b19569e6f0a0c?_a=BAMClqeA0", // öz şəkilinlə əvəz et
      title: "TODAY’S STEAL? MAJOR. TOMORROW? YOU’LL SEE. ",
      subtitle: "CHECK BACK DAILY FOR NEW FLASH DEALS DROPPING ALL WEEK LONG",
      buttons: [{ label: "GET NOTIFIED", link: "#" }],
    },
  ];
  const isMobile = useMatchMedia("(max-width: 540px)");

  return (
    <div className="relative font-ff-din">
      <div className="relative w-full pb-6">
        <div data-test-id="video-player-with-ga4-events">
          <video
            key={isMobile ? "mobile" : "desktop"}
            className="w-full object-cover"
            autoPlay
            loop
            playsInline
            controlsList="nodownload"
            poster=""
            preload="auto"
            muted
          >
            <source
              src={isMobile ? mainpagevideoresponsive : mainpagevideo}
              type="video/mp4"
              data-test-id="video-source"
            />
          </video>
        </div>
      </div>
      <section className="relative flex flex-col items-center justify-start gap-6 mobile:px-4 tablet:px-6 desktop:px-8 mx-auto">
        <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 md:space-y-3">
          <span>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              FRESHLY PAINTED
            </h1>
          </span>
          <p className="text-lg max-w-5xl text-gray-500">
            FOOTBALL, BUT MAKE IT ART
          </p>
          <div className="flex flex-wrap justify-center gap-4 pb-6 xs:pb-8 pt-2 max-w-screen-sm">
            <a
              href="#"
              className="bg-[#181818] text-white text-base font-semibold px-5 py-2 hover:bg-[#181818CC] transition cursor-pointer pointer-events-auto whitespace-normal"
            >
              SHOP NOW
            </a>
          </div>
        </div>

        {/* Mobile: 0–540px */}
        <div className="grid grid-cols-2 gap-[10px] w-full pb-4 tablet:hidden">
          {[
            { img: trending1, title: "MANCHESTER CITY BY KIDSUPER" },
            { img: trending2, title: "MONTERREY BY KIDSUPER" },
            { img: trending3, title: "ALL JERSEYS" },
            { img: trending4, title: "ULTRA, FUTURE & KING" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative aspect-square bg-cover bg-center cursor-pointer overflow-hidden"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
              {/* Text */}
              <div className="absolute bottom-2 left-2 text-white text-xs sm:text-sm tablet:text-base font-bold leading-5 tracking-wider uppercase">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet: 541–1023px → slider */}
        <div className="hidden tablet:flex gap-4 overflow-x-auto w-full pb-4 nap-x snap-mandatory scroll-smooth custom-scroll desktop:hidden">
          {[
            { img: trending1, title: "MANCHESTER CITY BY KIDSUPER" },
            { img: trending2, title: "MONTERREY BY KIDSUPER" },
            { img: trending3, title: "ALL JERSEYS" },
            { img: trending4, title: "ULTRA, FUTURE & KING" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 min-w-[calc((100%_-_16px)_/2)] aspect-square bg-cover bg-center cursor-pointer overflow-hidden"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white text-base sm:text-lg md:text-xl font-bold leading-5 tracking-wider uppercase">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: ≥1024px */}
        <div className="hidden lg:grid grid-cols-4 gap-[10px] w-full pb-4">
          {[
            { img: trending1, title: "MANCHESTER CITY BY KIDSUPER" },
            { img: trending2, title: "MONTERREY BY KIDSUPER" },
            { img: trending3, title: "ALL JERSEYS" },
            { img: trending4, title: "ULTRA, FUTURE & KING" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative aspect-square bg-cover bg-center cursor-pointer overflow-hidden"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
              {/* Text */}
              <div
                className={`absolute bottom-4 left-4 text-white text-xl font-bold leading-5 tracking-wider uppercase ${
                  index === 0 ? "max-w-[180px] break-words" : ""
                }`}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-8 gap-5">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center uppercase"
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full object-cover"
              />
              <div className="mt-3">
                <h3 className="text-[20px] font-bold">{section.title}</h3>
                <p className="uppercase text-xs tracking-wide text-gray-600">
                  {section.subtitle}
                </p>
                <div className="mt-4 flex flex-col items-center gap-2">
                  {section.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.link}
                      className="bg-[#181818] text-white text-base font-semibold px-5 py-2 w-full max-w-[256px] hover:bg-[#181818CC] transition"
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="cursor-pointer w-full py-15 tablet:py-30 desktop:py-40 max-h-[500px] my-10 mobile:px-4 tablet:px-6 desktop:px-8 flex items-center justify-center bg-gradient-to-r from-yellow-200 via-yellow-100 to-sky-400 text-black text-center">
        <div className="text-center">
          <h1 className="font-bold leading-tight mobile:text-[24px] tablet:text-[32px] desktop:text-[40px]">
            UP TO 60% OFF + EXTRA 20% OFF <br />
            USE CODE: SEMI20
          </h1>

          <p className="mobile:text-[14px] tablet:text-[20px] text-[24px] mt-1">
            BIG DEALS. LIMITED TIME. IT’S THE SEMI-ANNUAL SALE.
          </p>
          <p className="mobile:text-[12px] tablet:text-base desktop:text-base mt-1 mb-5">
            EXCLUSIONS APPLY
          </p>
          <div className="flex flex-row justify-center items-center flex-wrap gap-4 text-center">
            <button className="bg-[#181818] text-white hover:bg-[#181818CC] max-w-[160px] px-5 py-2 font-bold cursor-pointer transition">
              SHOP MEN
            </button>
            <button className="bg-[#181818] text-white hover:bg-[#181818CC] max-w-[160px] px-5 py-2 font-bold cursor-pointer transition">
              SHOP WOMEN
            </button>
            <button className="bg-[#181818] text-white hover:bg-[#181818CC] max-w-[160px] px-5 py-2 font-bold cursor-pointer transition">
              SHOP KIDS
            </button>
          </div>
        </div>
      </div>
      <section className="relative flex flex-col items-center justify-start gap-6 mobile:px-4 tablet:px-6 desktop:px-8 mx-auto">
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:gap-8 gap-5">
          {sections2.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center uppercase"
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full object-cover"
              />
              <div className="mt-3">
                <h3 className="text-[20px] font-bold">{section.title}</h3>
                <p className="uppercase text-xs tracking-wide text-gray-600">
                  {section.subtitle}
                </p>
                <div className="mt-4 flex flex-col items-center gap-2">
                  {section.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.link}
                      className="bg-[#181818] text-white text-base font-semibold px-5 py-2 w-full max-w-[256px] hover:bg-[#181818CC] transition"
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-[32px] font-bold text-center">TRENDING NOW</h2>
        <div className="hidden desktop:flex tablet:hidden gap-[10px] overflow-x-auto w-full pb-4 snap-x snap-mandatory scroll-smooth custom-scroll">
          {[
            { img: trending1, title: "MANCHESTER CITY BY KIDSUPER" },
            { img: trending2, title: "MONTERREY BY KIDSUPER" },
            { img: trending2, title: "MONTERREY BY KIDSUPER" },
            { img: trending3, title: "ALL JERSEYS" },
            { img: trending3, title: "ALL JERSEYS" },
            { img: trending4, title: "ULTRA, FUTURE & KING" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 min-w-[25%] aspect-square bg-cover bg-center cursor-pointer overflow-hidden"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white text-base sm:text-lg md:text-xl font-bold leading-5 tracking-wider uppercase">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden tablet:flex desktop:hidden gap-[10px] overflow-x-auto w-full pb-4 snap-x snap-mandatory scroll-smooth custom-scroll">
          {[
            { img: trending1, title: "MANCHESTER CITY BY KIDSUPER" },
            { img: trending2, title: "MONTERREY BY KIDSUPER" },
            { img: trending2, title: "MONTERREY BY KIDSUPER" },
            { img: trending3, title: "ALL JERSEYS" },
            { img: trending3, title: "ALL JERSEYS" },
            { img: trending4, title: "ULTRA, FUTURE & KING" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[50%] aspect-square bg-cover bg-center cursor-pointer overflow-hidden"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white text-base sm:text-lg md:text-xl font-bold leading-5 tracking-wider uppercase">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 tablet:hidden gap-[10px] overflow-x-auto w-full pb-4">
          {[
            { img: trending1, title: "MANCHESTER CITY BY KIDSUPER" },
            { img: trending2, title: "MONTERREY BY KIDSUPER" },
            { img: trending2, title: "MONTERREY BY KIDSUPER" },
            { img: trending3, title: "ALL JERSEYS" },
            { img: trending3, title: "ALL JERSEYS" },
            { img: trending4, title: "ULTRA, FUTURE & KING" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0  aspect-square bg-cover bg-center cursor-pointer overflow-hidden"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
              {/* Text */}
              <div className="absolute bottom-2 left-2 text-white text-base sm:text-lg md:text-xl font-bold leading-5 tracking-wider uppercase">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="my-10 pb-8 mobile:px-4 tablet:px-6 desktop:px-8">
        <div className="uppercase text-[24px] text-[#191919] pb-4 font-bold">Newest Products</div>
        <Slider data="new" />
      </div>
    </div>
  );
}

export default Main;
