import React from "react";
import {
  girl,
  shoes,
  trending1,
  trending2,
  trending3,
  trending4,
  speedcatVideo
} from "../assets";
import MainSlider from "./MainSlider";

function Main() {
  const sections = [
    {
      image:
        "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_2000/cms/images/3b6f811a2b82d50454117cd9fd54853086b105a6?_a=BAMClqeA0", // öz şəkilinlə əvəz et
      title: "KICK IT INTO ACTION",
      subtitle: "EXPLORE THE LATEST SHOES",
      buttons: [
        { label: "MEN'S SHOES", link: "#" },
        { label: "WOMEN'S SHOES", link: "#" },
      ],
    },
    {
      image:
        "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_2000/cms/images/5e0c937e86173ba9490ce6375551d638c5363418?_a=BAMClqeA0", // öz şəkilinlə əvəz et
      title: "FIERCE FITS",
      subtitle: "SHOP MUST-HAVE CLOTHES",
      buttons: [
        { label: "MEN'S CLOTHING", link: "#" },
        { label: "WOMEN'S CLOTHING", link: "#" },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10   font-ff-din">
      {/* İlk Banner */}
      <div className="cursor-pointer h-[500px] flex items-center justify-center bg-gradient-to-r from-pink-400 via-pink-300 to-orange-300 text-white text-center px-4">
        <div className="px-8">
          <h1 className="font-bold leading-tight text-[40px]">
            40% OFF FULL PRICE <br />
            30% OFF SALE ITEMS
          </h1>

          <p className="text-[24px] mt-1">
            OUR BEST DEAL ENDS TONIGHT. USE CODE{" "}
            <span className="font-bold">PUMAFNF</span>.
          </p>
          <p className="text-base mt-1 mb-5">EXCLUSIONS APPLY</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black px-5 py-2 font-bold hover:bg-[#DFE0E1] cursor-pointer transition">
              SHOP MEN
            </button>
            <button className="bg-white text-black px-5 py-2 font-bold hover:bg-[#DFE0E1] cursor-pointer transition">
              SHOP WOMEN
            </button>
            <button className="bg-white text-black px-5 py-2 font-bold hover:bg-[#DFE0E1] cursor-pointer transition">
              SHOP KIDS
            </button>
          </div>
        </div>
      </div>
      {/* İkinci*/}
      <div
        className="h-[500px] bg-cover bg-center flex items-center cursor-pointer px-8"
        style={{ backgroundImage: `url(${girl})` }}
      >
        <div className="text-white text-center ml-10">
          <h2 className="text-[40px] font-bold">MOSTRO</h2>
          <p className="text-[24px] mb-5">DRESSED TO DISRUPT</p>
          <button className="bg-white text-black px-5 py-2 font-bold hover:bg-[#DFE0E1] transition cursor-pointer">
            SHOP NOW
          </button>
        </div>
      </div>
      {/* Üçüncü */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-center text-center">
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
                    className="bg-[#181818] text-white text-base font-semibold px-5 py-2 w-[256px] hover:bg-[#181818CC] transition"
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-15">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <div className="mt-10">
            <h2 className="text-[40px] font-bold">SPEEDCAT</h2>
            <p className="text-[24px]">REWRITE THE CLASSICS</p>
            <p className="text-[14px] mt-2 text-gray-500">
              NEW STYLES FOR YOUR ROTATION
            </p>
            <a
              href="#"
              className="inline-block mt-2 bg-[#181818] text-white px-5 py-2 font-bold text-sm hover:bg-[#181818CC] transition"
            >
              SHOP NOW
            </a>
          </div>
          <img
            src="https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1920/cms/images/2d9f8ef95524b92dc5b03ee9e28fc6edd605c99a?_a=BAMClqeA0"
            alt="Speedcat"
            className="w-full object-cover z-1"
          />
        </div>

        {/* Right Side - Video */}
        <div className="w-full h-full relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute right-0 bottom-0 z-0"
          >
            <source src={speedcatVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-0 bg-white bg-opacity-30 pointer-events-none"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-center text-center">
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
                    className="bg-[#181818] text-white text-base font-semibold px-5 py-2 w-[256px] hover:bg-[#181818CC] transition"
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="h-[500px] bg-cover bg-center flex items-center cursor-pointer px-8"
        style={{ backgroundImage: `url(${shoes})` }}
      >
        <div className="text-white text-center ml-10">
          <h2 className="text-[40px] font-bold">LAFRANCÉ AIRBRUSH</h2>
          <p className="text-[24px] mb-3">BY LAMELO BALL </p>
          <button className="bg-white text-base text-black px-5 py-2 font-bold hover:bg-[#DFE0E1] transition cursor-pointer">
            SHOP NOW
          </button>
        </div>
      </div>
      {/* Trending Now Section */}
      <div className="px-8 flex flex-col gap-10">
        <h2 className="text-[32px] font-bold text-center">TRENDING NOW</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[10px] pb-4">
          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending1})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              PRIDE COLLECTION
            </div>
          </div>

          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending2})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              GIFTS FOR DAD
            </div>
          </div>

          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending3})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              SUMMER SHOP
            </div>
          </div>

          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending4})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              PREMIUM PUMA
            </div>
          </div>
        </div>
        <h2 className="text-[32px] font-bold text-center">
          TRIED AND TRUE STYLES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[10px] pb-4">
          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending1})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              SPEEDCAT
            </div>
          </div>

          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending2})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              SUDE XL
            </div>
          </div>

          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending3})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              PALERMO
            </div>
          </div>

          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending4})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              RIDER
            </div>
          </div>
        </div>
        <h2 className="text-[32px] font-bold text-center">UP YOUR GAME</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[10px] pb-4">
          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending1})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              BASKETBALL
            </div>
          </div>

          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending2})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              SOCCER
            </div>
          </div>

          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending3})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              MOTORSPORT
            </div>
          </div>

          <div
            className="relative aspect-[1/1] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${trending4})` }}
          >
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              RUNNING
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 pb-8">
        <MainSlider />
      </div>
    </div>
  );
}

export default Main;
