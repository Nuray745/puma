import React, { use, useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import { useLocation } from "react-router-dom";
import Card from "../components/Card"; // Yolu düz olmalıdır!

function ProdByCategory() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [count, setCount] = useState(8);

  const location = useLocation();
  const slug = location.pathname.replace("/categories/", "");

  useEffect(() => {
    getAllProducts().then((data) => {
      setAllProducts(data || []);
    });
  }, []);

  useEffect(() => {
    const filtered = allProducts.filter(
      (item) => item.subcategorySlug === slug
    );
    setFilteredProducts(filtered);
    setCount(8);
  }, [slug, allProducts]);

  return (
    <div className="px-4 mx-auto">
      <div className="grid grid-cols-1 tablet:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.length > 0 &&
          filteredProducts.slice(0, count).map((item) => (
            <Card
              key={item.id}
              image={item.variantProduct.preview}
              name={item.variantProduct.name}
              subHeader={item.variantProduct.subHeader}
              price={item.variantProduct.price}
              description={item.masterProduct?.description || ""}
              label={
                item.variantProduct.badges &&
                item.variantProduct.badges.length > 0
                  ? {
                      text: item.variantProduct.badges[0].label,
                      color:
                        item.variantProduct.badges[0].id === "new"
                          ? "black"
                          : item.variantProduct.badges[0].id === "blue"
                          ? "blue"
                          : "",
                    }
                  : null
              }
              colorCount={item.masterProduct?.colors?.length || 1}
              isAvailable={item.variantProduct?.orderable}
            />
          ))}
      </div>
      {count < filteredProducts.length && (
        <button
          onClick={() => setCount(count + 8)}
          className="bg-[#514d4d] hover:bg-[#6b6b6b] text-white w-full mx-auto py-5 my-4 uppercase font-bold cursor-pointer"
        >
          Loading
        </button>
      )}
    </div>
  );
}

export default ProdByCategory;
