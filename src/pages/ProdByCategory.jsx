import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import { useLocation } from "react-router-dom";
import Card from "../components/Card"; // Yolu düz olmalıdır!

function ProdByCategory() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
  }, [slug, allProducts]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
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
        ))
      ) : (
        <p>Loading or no products for "{slug}"</p>
      )}
    </div>
  );
}

export default ProdByCategory;
