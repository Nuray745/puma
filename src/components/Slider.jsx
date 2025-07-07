import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import Card from "../components/Card"; // düzgün path olduğuna əmin ol

function Slider({ data }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const all = await getAllProducts();
      const filtered = all.filter(
        (item) => item.badge?.toLowerCase() === data.toLowerCase()
      );
      setProducts(filtered);
    };

    fetchData();
  }, [data]);

  return (
    <section className="w-full" aria-label={data.toUpperCase()}>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth custom-scroll">
        {products.map((product, idx) => {
          const variation = product.variations?.[0];
          const price = variation?.productPrice?.price || "N/A";

          return (
            <a
              key={idx}
              href={`/product/${product.id}`}
              className="flex-shrink-0 w-full tablet:w-[310px] snap-start cursor-pointer"
            >
              <Card
                image={variation?.preview || product?.image?.href}
                name={product.name}
                subHeader={product.subHeader}
                price={price}
                isAvailable={variation?.orderable}
                colorCount={product.colors?.length || 1}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Slider;
