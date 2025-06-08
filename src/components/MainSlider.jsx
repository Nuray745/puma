import React from "react";

function MainSlider() {
  const bestProducts = [
    {
      name: "Suede Classic",
      subtitle: "Sneakers",
      price: "$90.00",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,w_400/global/399781/01/sv01/fnd/PNA/fmt/png/Suede-Classic-Sneakers",
      link: "/us/en/pd/suede-classic-sneakers/399781?swatch=01",
    },
    {
      name: "Speedcat OG",
      subtitle: "Women's Sneakers",
      price: "$100.00",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,w_400/global/400986/01/sv01/fnd/PNA/fmt/png/Speedcat-OG-Women's-Sneakers",
      link: "/us/en/pd/speedcat-og-womens-sneakers/400986?swatch=01",
    },
    {
      name: "Easy Rider Vintage",
      subtitle: "Women's Sneakers",
      price: "$54.99",
      oldPrice: "$90.00",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,w_400/global/400773/01/sv01/fnd/PNA/fmt/png/Easy-Rider-Vintage-Women's-Sneakers",
      link: "/us/en/pd/easy-rider-vintage-womens-sneakers/400773?swatch=01",
    },
    {
      name: "Easy Rider Mix",
      subtitle: "Sneakers",
      price: "$90.00",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,w_400/global/399025/01/sv01/fnd/PNA/fmt/png/Easy-Rider-Mix-Sneakers",
      link: "/us/en/pd/easy-rider-mix-sneakers/399025?swatch=01",
    },
  ];

  return (
    <section className="w-full px-8 " aria-label="BEST OF THE BEST">
      <h4 className="text-2xl font-bold pb-6 uppercase flex justify-between">
        BEST OF THE BEST
      </h4>

      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth custom-scroll   ">
        {bestProducts.map((product, idx) => (
          <a
            key={idx}
            href={product.link}
            className="flex-shrink-0 w-[310px] snap-start cursor-pointer"
          >
            <div className="flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[1/1] object-contain bg-[#FAFAFA]"
                loading="lazy"
              />
              <div className="mt-3 flex justify-between items-start">
                <div>
                  <h3 className="text-base font-bold">{product.name}</h3>
                  <span className="text-[#676D75] text-[17px] font-normal">
                    {product.subtitle}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span
                    className={`text-sm sm:text-base font-bold ${
                      product.oldPrice ? "text-[#BA2B20]" : "text-black"
                    }`}
                  >
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-[#191919] line-through -mt-[2px]">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default MainSlider;
