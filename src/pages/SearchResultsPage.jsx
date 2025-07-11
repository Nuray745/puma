import React from "react";
import { useLocation, Link } from "react-router-dom";
import Card from "../components/Card"; 

function SearchResultsPage() {
  const location = useLocation();
  const { products = [], query = "" } = location.state || {};

  const results = products.filter((p) =>
    p.header?.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <div className="p-4 tablet:p-8">
      <h2 className="text-xl md:text-[32px] lg:text-[40px] font-bold mb-6">
        Search Results for "{query}"
      </h2>

      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid grid-cols-1 tablet:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((product, i) => {
            const variation = product.variations?.[0] || {};
            const price = variation?.productPrice?.price || "N/A";

            return (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Card
                  image={
                    variation?.preview ||
                    product.image?.href ||
                    "default-image-url"
                  }
                  name={product.name || product.header || "No Name"}
                  subHeader={product.subHeader || "No Subheader"}
                  price={price}
                  label={
                    product.badge && {
                      text: variation?.badges?.[0]?.label || "",
                      color:
                        variation?.badges?.[0]?.id === "new"
                          ? "black"
                          : variation?.badges?.[0]?.id === "blue"
                          ? "blue"
                          : "",
                    }
                  }
                  colorCount={product.colors?.length || 1}
                  isAvailable={variation?.orderable}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;
